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
    render(){
        return(
            <ul>
                {   //yukarıdaki item yapısını getirir
                    this.props.items.map((item, index)=>
                        <TodoItem key={index} item={item} />
                    )
                }
            </ul>
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
    render(){
        return(
            <div>
                <p>
                    <button>Clear Items</button>
                </p>
                <form>
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