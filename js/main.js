// I need a caculator function that get activated when you click on equal-to, so i would add an event listener to equal-to to activate calculator function on click

// I need a function that listens for user's input and pushes the appropriate number to the displaay.

//A function that passes the right operator to the calculator function for evaluation

//A reset function that clears all inputs from the display

//Variabble to store DOM elements
let inputOutput = document.getElementById('result');
let decimal = document.getElementById('decimal');
let clear = document.getElementById('clear');
let num = document.querySelectorAll('.num')
let operator = document.querySelectorAll('.operator');

//Variable to hold temporary values
let currVal = '0';
let preVal;
let arrayVal = [];

//Add event listeners to the number button
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', updateCurrent)
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', calculate)
}

//A function to update the current value
//We use an event.target object property to obtain the values of whatever element triggered the event
function updateCurrent(e) {
    let btnContent = e.target.innerText;
    if (currVal == '0') {
        currVal = ''
    }
    currVal += btnContent;
    inputOutput.value = currVal; 
}

//Our main calculator function
function calculate(e) {
    switch (e.target.innerText) {
        case '+': {
            preVal = currVal;
            inputOutput.value = currVal + '+'
            currVal = '0'
            updateCurrent(e)
            arrayVal.push(preVal, '+'); 
            break;
        }
        case '-': {
            preVal = currVal;
            inputOutput.value = currVal + '-'
            currVal = '0';
            arrayVal.push(preVal, '-'); 
            break;
        }
        case 'x': {
            preVal = currVal;
            inputOutput.value = currVal + 'x'
            currVal = '0';
            arrayVal.push(preVal, '*'); 
            break;
        }
        case '/': {
            preVal = currVal;
            inputOutput.value = currVal + '/'
            currVal = '0';
            arrayVal.push(preVal, '/'); 
            break;
        }
        case '=': {
            arrayVal.push(currVal)
            let result = eval( arrayVal.join('') )
            currVal = result + ''
            inputOutput.value = currVal
            currVal = '0'
            arrayVal = []
            break;
        }
        default: break;
    }
}

//A function to clear everything
clear.onclick = function() {
    currVal = '0';
    delete preVal;
    arrayVal = [];
    inputOutput.value = currVal
}

//function to insert decimal point
decimal.onclick = function() {
    if (!currVal.includes('.')) {
        currVal += '.'
        inputOutput.value = currVal
    }
}