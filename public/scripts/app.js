"use strict";

//ES5 vs ES6
var phones = [{
  name: "iPhone 8",
  price: 4000
}, {
  name: "iPhone 9",
  price: 5000
}, {
  name: "iPhone XR",
  price: 6000
}, {
  name: "iPhone X",
  price: 10000
}];
/* ********************************************* */

var priceES5 = phones.map(function phoneList(p) {
  return p.price;
});
var priceES6 = phones.map(function (phoneList) {
  return phoneList.price;
});
console.log(priceES5);
console.log(priceES6);
/* ********************************************* */

var filterES5 = phones.filter(function phoneFilter(p) {
  return p.price >= 6000;
});
var filterES6 = phones.filter(function (phoneFilter) {
  return phoneFilter.price >= 6000;
});
console.log(filterES5);
console.log(filterES6);
