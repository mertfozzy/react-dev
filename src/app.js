/*
const Header = function () {
    return <h1>Hello React</h1>
}
*/

class TodoApp extends React.Component{
    render(){

        const app = {
            title : "To-Do App",
            description : "Lorem ipsum dolor sit amet.",
            items : ["item1", "item2", "item3"]
        };

        return(
        <div>
            <Header title={app.title} description={app.description} />
            <TodoList items={app.items}/>
            <Action/>
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
    constructor(props){
        super(props);
        this.clearItems = this.clearItems.bind(this); //bind işlemi yaptık, kaybedilen thisi aldık
    }
    clearItems(){
        console.log("cleared");

    }
    render(){
        return(
            <div>
                <ul>
                    {   //yukarıdaki item yapısını getirir
                        this.props.items.map((item, index)=>
                            <TodoItem key={index} item={item} />
                        )
                    }
                </ul>
                <p>
                   <button onClick={this.clearItems}>Clear Items</button>
                </p>
            </div>
        );
    }
}

class TodoItem extends React.Component{
    render(){
        return( //itemları (index) yapının içine koyar
            <li>{this.props.item}</li>
        );
    }
}

class Action extends React.Component{

    //eleman ekleme
    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        if (item) {
            console.log(item);
        }
    }

    render(){
        return(
            <div>
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