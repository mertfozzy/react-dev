//ES5 vs ES6

const phones = [
    {name:"iPhone 8", price : 4000},
    {name:"iPhone 9", price : 5000},
    {name:"iPhone XR", price : 6000},
    {name:"iPhone X", price : 10000},
];

/* ********************************************* */

let priceES5 = phones.map(function phoneList(p) {
    return p.price;
});

let priceES6 = phones.map(phoneList => phoneList.price);

console.log(priceES5);
console.log(priceES6);

/* ********************************************* */

let filterES5 = phones.filter(function phoneFilter(p) {
    return p.price >=6000;
});

let filterES6 = phones.filter(phoneFilter => phoneFilter.price >= 6000);

console.log(filterES5);
console.log(filterES6);


