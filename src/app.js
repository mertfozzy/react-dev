/*
const Header = function () {
    return <h1>Hello React</h1>
}
*/

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


class Header extends React.Component{
    render(){
        console.log(this.props); //props özel bir parametre, React.Componentten geliyor
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

class TodoList extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {   //yukarıdaki item yapısını getirir
                        this.props.items.map((item, index)=>
                            <TodoItem deleteItem={this.props.deleteItem} key={index} item={item} />
                        )
                    }
                </ul>
                <p>
                   <button onClick={this.props.clearItems}>Clear Items</button>
                </p>
            </div>
        );
    }
}

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        this.props.deleteItem(this.props.item);
    }
    render(){
        return( //itemları (index) yapının içine koyar
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}>x</button>
            </li>
        );
    }
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

/* Bunun yerine yukarıda TodoApp componenti aldık :
const template = (
    <div>
        <Header />
        <Todo />
        <Action/>
    </div>
);


ReactDOM.render(template, document.getElementById("root"));
*/

ReactDOM.render(<TodoApp/>, document.getElementById("root"));