class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.clearItems = this.clearItems.bind(this); //bind işlemi yaptık, kaybedilen thisi aldık
        this.addItems = this.addItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            title : "To-Do App",
            description : "Lorem ipsum dolor sit amet.",
            items :[
                "item1",
                "item2",
                "item3",
                "item4"
            ]
        }
    }

    componentDidMount(){
        const json = localStorage.getItem("items");
        const items = JSON.parse(json);

        if(items) {
            this.setState({
                items : items
            })
        }

    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevState.items.length !== this.state.items.length) {
            const json = JSON.stringify(this.state.items);
            localStorage.setItem("items",json)
        }
    }


    deleteItem(item){
        console.log(item);
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i;
            })
            return {
                items : arr
            }
        });
    }

    clearItems(){
        this.setState({
            items : []
        });
    }

    addItems(item){

        if (!item) {
            return `Boş bırakılamaz !`;
        }
        else if (this.state.items.indexOf(item) > -1) {
            return `Aynı elemanı ekleyemezsiniz.`;
        }
        this.setState((prevState)=>{
            return {items : prevState.items.concat(item)} 
        });
    }

    render(){
        return(
        <div>
            <Header title={this.state.title} description={this.state.description} />
            <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
            <Action addItems={this.addItems}/>
        </div>
        );
    }
}

function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    );
}

const TodoList = (props) => {
    return(
        <div>
            <ul>
                {   //yukarıdaki item yapısını getirir
                    props.items.map((item, index)=>
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item} />
                    )
                }
            </ul>
            <p>
               <button onClick={props.clearItems}>Clear Items</button>
            </p>
        </div>
    );
}

const TodoItem = (props) => {
    return( //itemları (index) yapının içine koyar
        <li>
            {props.item}
            <button onClick={() => {props.deleteItem(props.item)}}>x</button>
        </li>
    );
}

class Action extends React.Component{

    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error : ""
        }
    }

    //eleman ekleme
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        const error = this.props.addItems(item);
        this.setState({
            error : error
        });
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem"/>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<TodoApp/>, document.getElementById("root"));