var root = document.getElementById("root");

var app = {
    title : "To-Do App",
    description : "Lorem ipsum dolor sit amet.",
    items : ["item1", "item2", "item3"]
};


const onFormSubmit = (event) => {
    event.preventDefault();

    var item = event.target.elements.txtItem.value;

    if (item) {
        app.items.push(item);
        event.target.elements.txtItem.value="";
        render();
    }

    console.log("form submitted");
}

const clearItems = () => {
    app.items = [];
    render();
}

const render = () => {
    var template = 
    <div>
    <h1>{app.title}</h1>
    <div>{app.description}</div>

    <ul>
        {
            app.items.map((item)=>{
                return <li key={item.toString()}>{item}</li>
            })
        }
    </ul>

    <p>
        <button onClick={clearItems}>Clear Items</button>
    </p>

    <p>There are {app.items.length} item.</p>

    <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem"/>
        <button type="submit">Add Item</button>
    </form>

    </div>;

ReactDOM.render(template, root);
}

render();