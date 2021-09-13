"use strict";

var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World Nigga!"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var product = {
  name: "iPhone 8",
  price: 3000,
  description: "a nice budget phone"
};

function getDescription(description) {
  if (description) {
    return description;
  } else {
    return "no description";
  }
}

var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name : ", product.name), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price : ", product.price, "\u20BA"), /*#__PURE__*/React.createElement("p", {
  id: "product-description"
}, "description : ", getDescription(product.description)));

function addOne() {
  console.log("add one");
}

function minusOne() {
  console.log("minus one");
}

var number = 0;
var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number : ", number), /*#__PURE__*/React.createElement("button", {
  id: "btnPlusOne",
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  id: "btnMinusOne",
  onClick: minusOne
}, "-1")); //ReactDOM.render(template, root);
//ReactDOM.render(template2, root);

ReactDOM.render(template3, root);
