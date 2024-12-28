let value = 0;

let setValue = document.getElementById('value');
setValue.textContent = value;

function incrementValue(){
    console.log("Increment Function called!!!");
    setValue.textContent = ++value;
}

function decrementValue(){
    console.log("Decrement Function called!!!");
    setValue.textContent = --value;
}


let incrementBtn = document.getElementById('increment-btn');
incrementBtn.addEventListener('click',incrementValue);

let decrementBtn = document.getElementById('decrement-btn');
decrementBtn.addEventListener('click',decrementValue);