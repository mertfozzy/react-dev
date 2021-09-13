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
ReactDOM.render(template, root);
ReactDOM.render(template2, root);
