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