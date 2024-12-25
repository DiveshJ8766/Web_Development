console.log(document);

console.log(window);

window.console.log("Welcome to the Javascript DOM Class")

//* This will throw the error as document object dont have the console method
// document.console.log("Welcome to the document console")

//* Accesing the Element
let idSelector = document.getElementById('para-style');
console.log("ID Selector : ",idSelector);

let classSelector = document.getElementsByClassName('span-class');
console.log("Class Selector : ",classSelector);

let tagSelector = document.getElementsByTagName('span');
console.log("Tag Selector : ",tagSelector);

//* Query Selector
let a = document.querySelector('#para-style');
console.log("Id QuerySelector : ",a);

a = document.querySelector('.span-class');
console.log("Query Class Selector : ",a);

a = document.querySelector('span');
console.log("Query Tag Selector : ",a);

//* Query Selector ALL
a = document.querySelectorAll('#para-style');
console.log("Query Selector ALL With ID : ",a);

a = document.querySelectorAll('.span-class');
console.log("Query Selector ALL With Class : ",a);

a = document.querySelectorAll('span');
console.log("Query Selector All With Span : ",a);