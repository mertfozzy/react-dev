class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            number : 0
        }
    }

    addOne(){
        this.setState({
            number : this.state.number + 1
        });
        console.log("+1");
    }

    minusOne(){
        this.setState({
            number : this.state.number - 1
        });
        console.log("-1");
    }

    reset(){
        this.setState({
            number  : 0
        });
        console.log("resetted");
    }

    render(){
        return(
            <div>
                <h1>Number : {this.state.number} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
    
}


ReactDOM.render(<Counter/>, document.getElementById("root"));


// var root = document.getElementById("root");

// var template = 
// <div>
// <h1 id="header">Hello World Nigga!</h1>
// <div>Lorem, ipsum dolor.</div>

// <ul>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
//     <li>Lorem, ipsum.</li>
// </ul>

// </div>;

// var product = {
//     name :  "iPhone 8",
//     price : 3000,
//     description : "a nice budget phone"
// };  

// function getDescription(description) {
//     if (description) {
//         return description;
//     }
//     else{
//         return "no description";
//     }
// }

// var template2 = <div id="product-details">

// <h2 id="product-name">name : {product.name}</h2>
// <p id="product-price">price : {product.price}₺</p>
// <p id="product-description">description : {getDescription(product.description)}</p>

// </div>;

// var number = 0;

// function addOne() {
//     number++;
//     renderApp();
//     console.log("add one");
// }

// function minusOne() {
//     number--;
//     renderApp();
//     console.log("minus one");
// }

// function renderApp() {
//     var template3 = (
//         <div>
//             <h1>Number : {number}</h1>
//             <button id="btnPlusOne" onClick={addOne}>+1</button>
//             <button id="btnMinusOne" onClick={minusOne}>-1</button>
//         </div>
//     );

//     ReactDOM.render(template3, root);
// }

// function tick() {
//     var element = (
//         <div>
//             <h2>
//                 time is : {new Date().toLocaleTimeString()}
//             </h2>
//         </div>
//     );

//     ReactDOM.render(element, root);
// }

// setInterval(tick, 1000);

// //renderApp();


// //ReactDOM.render(template, root);
// //ReactDOM.render(template2, root);
