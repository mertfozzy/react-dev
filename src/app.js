var root = document.getElementById("root");

var template = 
<div>
<h1 id="header">Hello World Nigga!</h1>
<div>Lorem, ipsum dolor.</div>

<ul>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
    <li>Lorem, ipsum.</li>
</ul>

</div>;

var product = {
    name :  "iPhone 8",
    price : 3000,
    description : "a nice budget phone"
};  

function getDescription(description) {
    if (description) {
        return description;
    }
    else{
        return "no description";
    }
}

var template2 = <div id="product-details">

<h2 id="product-name">name : {product.name}</h2>
<p id="product-price">price : {product.price}₺</p>
<p id="product-description">description : {getDescription(product.description)}</p>

</div>;

var number = 0;

function addOne() {
    number++;
    renderApp();
    console.log("add one");
}

function minusOne() {
    number--;
    renderApp();
    console.log("minus one");
}

function renderApp() {
    var template3 = (
        <div>
            <h1>Number : {number}</h1>
            <button id="btnPlusOne" onClick={addOne}>+1</button>
            <button id="btnMinusOne" onClick={minusOne}>-1</button>
        </div>
    );

    ReactDOM.render(template3, root);
}

function tick() {
    var element = (
        <div>
            <h2>
                time is : {new Date().toLocaleTimeString()}
            </h2>
        </div>
    );

    ReactDOM.render(element, root);
}

setInterval(tick, 1000);

//renderApp();


//ReactDOM.render(template, root);
//ReactDOM.render(template2, root);
