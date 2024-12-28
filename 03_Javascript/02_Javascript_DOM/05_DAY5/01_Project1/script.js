// Getting the Element
const valueElement = document.querySelector('#counter');

// Incrementing the Value
const increment = () =>{

    // this is the value we can't make it as const
    let counterValue = parseInt(valueElement.innerText);
    counterValue = counterValue + 1;
    valueElement.innerText = counterValue;
}

// Decrementing the Value
const decrement = () =>{

    // this is the value we can't make it as const
    let counterValue = parseInt(valueElement.innerText);
    counterValue = counterValue - 1;
    valueElement.innerText = counterValue;
}