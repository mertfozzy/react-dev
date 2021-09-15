/*
const Header = function () {
    return <h1>Hello React</h1>
}
*/

class TodoApp extends React.Component{
    render(){
        return(
        <div>
            <Header />
            <TodoList />
            <Action/>
        </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Todo Application</h1>
                <div>Lorem, ipsum dolor.</div>
            </div>
        );
    }
}

class TodoList extends React.Component{
    render(){
        return(
            <ul>
                <TodoItem />
            </ul>
        );
    }
}

class TodoItem extends React.Component{
    render(){
        return(
            <div>
                <li>Todo item</li>
                <li>Todo item2</li>
                <li>Todo item3</li>
            </div>
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