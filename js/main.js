// I need a caculator function that get activated when you click on equal-to, so i would add an event listener to equal-to to activate calculator function on click

// I need a function that listens for user's input and pushes the appropriate number to the displaay.

//A function that passes the right operator to the calculator function for evaluation

//A reset function that clears all inputs from the display

//Variabble to store DOM elements
let inputOutput = document.getElementById('#result');
let decimal = document.getElementById('#decimal');
let clear = document.getElementById('#clear');
let num = document.querySelector('.num');
let operator = document.querySelector('.operator');

//Variable to hold temporary values
let currVal = 0;
let pendVal;
let arrayVal = [];

//Add event listeners to the number button
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click')
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click')
}

//A function to update the current value
//We use an event.target object property to obtain the values of whatever element triggered the event
function updateCurrent(e) {
    let btnContent = e.target.innerText; 
    if (currVal == 0) {
        currVal = ''
    }
    currVal += btnContent;
    inputOutput.innerText = currVal;
}

//Our main calculator function
function calculate() {
    switch (e.target.innerText) {
        case '+': {
            pendVal = currVal;
            currVal = 0;
            arrayVal.push(pendVal, '+'); 
            break;
        }
        case '-': {
            pendVal = currVal;
            currVal = 0;
            arrayVal.push(pendVal, '-'); 
            break;
        }
        case 'x': {
            pendVal = currVal;
            currVal = 0;
            arrayVal.push(pendVal, '*'); 
            break;
        }
        case '/': {
            pendVal = currVal;
            currVal = 0;
            arrayVal.push(pendVal, '/'); 
            break;
        }
        case '=': {
            let result = eval( arrayVal.join('') )
            arrayVal = []
            inputOutput.innerText = result
            break;
        }
    }
}