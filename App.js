const root = document.getElementById('root');

const calc_browser = document.createElement('div');
calc_browser.id = "browser";

const calc_formula = document.createElement('div');
const calc_display = document.createElement('input');

calc_formula.id = "formula";
calc_display.id = "display";


var operand1 = 0;
var operand2 = 0;
var operator = 0;
var result = 0;

var dotHandler = 0;
var isDivideZero = false;

const one = document.createElement('button');
const two = document.createElement('button');
const three = document.createElement('button');
const four = document.createElement('button');
const five = document.createElement('button');
const six = document.createElement('button');
const seven = document.createElement('button');
const eight = document.createElement('button');
const nine = document.createElement('button');
const zero = document.createElement('button');
const dot = document.createElement('button');
one.className = "numberButton";
two.className = "numberButton";
three.className = "numberButton";
four.className = "numberButton";
five.className = "numberButton";
six.className = "numberButton";
seven.className = "numberButton";
eight.className = "numberButton";
nine.className = "numberButton";
zero.className = "numberButton";
dot.className = "numberButton";
one.id = "one";
two.id = "two";
three.id = "three";
four.id = "four";
five.id = "five";
six.id = "six";
seven.id = "seven";
eight.id = "eight";
nine.id = "nine";
zero.id = "zero";
dot.id = "dot";
one.innerHTML = "1";
two.innerHTML = "2";
three.innerHTML = "3";
four.innerHTML = "4";
five.innerHTML = "5";
six.innerHTML = "6";
seven.innerHTML = "7";
eight.innerHTML = "8";
nine.innerHTML = "9";
zero.innerHTML = "0";
dot.innerHTML = ".";



const plusButton = document.createElement('button');
const minusButton = document.createElement('button');
const multiplyButton = document.createElement('button');
const divideButton = document.createElement('button');
const resultButton = document.createElement('button');
const clearButton = document.createElement('button');
plusButton.className = "calcButton";
minusButton.className = "calcButton";
multiplyButton.className = "calcButton";
divideButton.className = "calcButton";
resultButton.className = "calcButton";
clearButton.className = "calcButton";
plusButton.id = "plus";
minusButton.id = "minus";
multiplyButton.id = "multiply";
divideButton.id = "divide";
resultButton.id = "result";
clearButton.id = "clear";
plusButton.innerHTML = "+";
minusButton.innerHTML = "-";
multiplyButton.innerHTML = "*";
divideButton.innerHTML = "/";
resultButton.innerHTML = "=";
clearButton.innerText = "C";


root.appendChild(calc_browser);
calc_browser.appendChild(calc_display);
calc_browser.appendChild(calc_formula);

calc_browser.appendChild(clearButton);
calc_browser.appendChild(seven);
calc_browser.appendChild(eight);
calc_browser.appendChild(nine);
calc_browser.appendChild(divideButton);
calc_browser.appendChild(four);
calc_browser.appendChild(five);
calc_browser.appendChild(six);
calc_browser.appendChild(multiplyButton);
calc_browser.appendChild(one);
calc_browser.appendChild(two);
calc_browser.appendChild(three);
calc_browser.appendChild(minusButton);
calc_browser.appendChild(zero);
calc_browser.appendChild(dot);
calc_browser.appendChild(resultButton);
calc_browser.appendChild(plusButton);

function numberAddEventListener(numberBtn, number)
{
    numberBtn.addEventListener('click', () => {
        if(dotHandler == 0)
        {
            if(operator == 0)
            {
                operand1 = operand1 * 10 + number;
                calc_display.value = operand1;
                calc_formula.innerHTML = operand1;
            }
            else
            {
                operand2 = operand2 * 10 + number;
                calc_display.value = operand2;
                calc_formula.innerHTML = operand1 + " " + operator + " "+ operand2;
            }
        }
        else
        {
            var i = number;
            for(j = 0 ; j < dotHandler ; j++)
            {
                i = i/10;
            }
            if(operator == 0)
            {
                operand1 = operand1 + i;
                calc_display.value = operand1;
                calc_formula.innerHTML = operand1;
            }
            else
            {
                operand2 = operand2 + i;
                calc_display.value = operand2;
                calc_formula.innerHTML = operand1 + " " + operator + " "+ operand2;
            }
            dotHandler++;
            console.log(dotHandler);
            console.log(operand1, operand2);
        }    
    });
}

numberAddEventListener(one, 1);
numberAddEventListener(two, 2);
numberAddEventListener(three, 3);
numberAddEventListener(four, 4);
numberAddEventListener(five, 5);
numberAddEventListener(six, 6);
numberAddEventListener(seven, 7);
numberAddEventListener(eight, 8);
numberAddEventListener(nine, 9);
numberAddEventListener(zero, 0);


// one.addEventListener('click', () => {
//     if(dotHandler == 0)
//     {
//         if(operator == 0)
//         {
//             operand1 = operand1 * 10 + 1;
//             calc_display.value = operand1;
//             calc_formula.innerHTML = operand1;
//         }
//         else
//         {
//             operand2 = operand2 * 10 + 1;
//             calc_display.value = operand2;
//             calc_formula.innerHTML = operand1 + " " + operator + " "+ operand2;
//         }
//     }
//     else
//     {
//         var i = 1;
//         for(j = 0 ; j < dotHandler ; j++)
//         {
//             i = i/10;
//         }
//         if(operator == 0)
//         {
//             operand1 = operand1 + i;
//             calc_display.value = operand1;
//             calc_formula.innerHTML = operand1;
//         }
//         else
//         {
//             operand2 = operand2 + i;
//             calc_display.value = operand2;
//             calc_formula.innerHTML = operand1 + " " + operator + " "+ operand2;
//         }
//         dotHandler++;
//         console.log(dotHandler);
//     }    
// });


dot.addEventListener('click', () => {
    if(dotHandler == 0)
    {
        dotHandler++;
        if(operator == 0)
        {
            calc_display.value = operand1 + ".";
            calc_formula.innerHTML = operand1 + ".";
        }
        else
        {
            calc_display.value = operand2 + ".";
            calc_formula.innerHTML = operand1 + " " + operator + " "+ operand2 + ".";
        }
    }    
});


plusButton.addEventListener('click', () => {
    if(operand1 == 0)
    {}    
    else if(operator == 0)
    {
        operator = "+";
        calc_formula.innerText += " + ";
    }
    else if(operand2 == 0)
    {}
    else
    {
        calc_formula.innerText += " + ";
        result = operand1 + operand2;
        operand1 = result;
        operand2 = 0;
        operator = "+";
        result = 0;
        dotHandler = 0;        
        calc_display.value = operand1;
    }
    console.log(operand1, operator, operand2);
});
minusButton.addEventListener('click', () => {
    if(operand1 == 0)
    {}    
    else if(operator == 0)
    {
        operator = "-";
        calc_formula.innerText += " - ";
    }
    else if(operand2 == 0)
    {}
    else
    {
        calc_formula.innerText += " - ";
        result = operand1 - operand2;
        operand1 = result;
        operand2 = 0;
        operator = "-";
        result = 0;
        dotHandler = 0;        
        calc_display.value = operand1;
    }
    console.log(operand1, operator, operand2);
});
multiplyButton.addEventListener('click', () => {
    if(operand1 == 0)
    {}    
    else if(operator == 0)
    {
        operator = "*";
        calc_formula.innerText += " * ";
    }
    else if(operand2 == 0)
    {}
    else
    {
        calc_formula.innerText += " * ";
        result = operand1 * operand2;
        operand1 = result;
        operand2 = 0;
        operator = "*";
        result = 0;
        dotHandler = 0;        
        calc_display.value = operand1;
    }
    console.log(operand1, operator, operand2);
});
divideButton.addEventListener('click', () => {
    operator = "/";
    calc_formula.innerText = operand1 + " " + operator;
});
resultButton.addEventListener('click', () => {
    if(operator == "+")
    {
        result = operand1 + operand2;
    }
    else if(operator == "-")
    {
        result = operand1 - operand2;
    }
    else if(operator == "*")
    {
        result = operand1 * operand2;
    }
    else if(operator == "/")
    {
        if(operand2 == 0)
        {
            alert("cannot divide by 0");
        }
        else
        {
            result = operand1 / operand2;
        }
    }
    else if(operator == 0)
    {}
    else
    {
        alert("calculation error");
    }

    calc_formula.innerText = operand1 + " " + operator + " " + operand2 + " =";
    calc_display.value = result;
    operand1 = result;
    operand2 = 0;
    operator = 0;
    result = 0;
    dotHandler = 0;

});
clearButton.addEventListener('click', () => {
    operand1 = 0;
    operand2 = 0;
    operator = 0;
    result = 0;

    dotHandler = 0;

    calc_display.value = '';
    calc_formula.innerHTML = '';
})