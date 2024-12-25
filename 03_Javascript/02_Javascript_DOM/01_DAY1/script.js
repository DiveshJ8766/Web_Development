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


//* Inner HTML;
//* get inner HTML
let parent = document.getElementById('inner-html');
console.log("Inner HTML : ",parent.innerHTML);
let child = `
        <p class="paragraph-style">
            this is the paragraph
            <span>this is the span text</span>
        </p>`;

//* set inner HTML
// parent.innerHTML = child;
console.log("Parent New HTML : ",parent.innerHTML);

//* delete inner html
// parent.innerHTML = "";

//* Inner Text
parent = document.querySelector('#inner-html');
console.log("Inner Text : \n",parent.innerText);

// parent.innerText = "<h2>HEy DIVESH</h2>";
console.log("Inner Text : ",parent.innerText);


//* Outer HTML
console.log("Outer HTML : ",parent.outerHTML);

// parent.outerHTML = "<h2>HEy DIVESH</h2>";
console.log("Outer Text : ",parent.outerHTML);


//* TextContent
console.log("Text Content : ",parent.textContent);

//* Creating a Element
let newElement = document.createElement('div');
document.body.appendChild(newElement);

newElement.innerHTML = '<p>Hello this is paragraph</p> <h2>Hello this is heading</h2> <b id="bold-text"></b>';

let e = document.getElementById('bold-text');
e.textContent = "this is the bold text";

console.log(newElement.outerHTML);

//* Creating TextNode in two ways

//* first way using createTextNode
let para = document.createElement('p');
let textNode = document.createTextNode("This is the text Node data");
para.appendChild(textNode);
parent.appendChild(para);

console.log(parent);

//* second way using textContent
para = document.createElement('span');
para.textContent = "Hello this is new text content";
parent.appendChild(para);
console.log(parent);


