"use strict";

// function add() {
//     var numberOne = 83;
//     var numberTwo = 25;
    
//     var result = numberOne + numberTwo;
    
//     console.log(result)
    
// }
// // add();

//  // .getElementById reutrns "null" if it cannot find id, if it did it would return an "html element"
// function init() {
//     var addButton = document.getElementById("addButton")  
//     addButton.onclick = add;
// }
// // init();
// window.onload = init;
// // button.onclick = add

function addButtonClick() {
    var number1 =  Number(document.getElementById("numberOneInput").value);
    var number2 =  Number(document.getElementById("numberTwoInput").value);
    var result = number1 + number2;
    document.getElementById("answer").value = result;
}

function subtractButtonClick() {
    var number1 =  Number(document.getElementById("numberOneInput").value);
    var number2 =  Number(document.getElementById("numberTwoInput").value);
    var result = number1 - number2;
    document.getElementById("answer").value = result;
}

function multiplyButtonClick() {
    var number1 =  Number(document.getElementById("numberOneInput").value);
    var number2 =  Number(document.getElementById("numberTwoInput").value);
    var result = number1 * number2;
    document.getElementById("answer").value = result;
}

function divideButtonClick() {
    var number1 =  Number(document.getElementById("numberOneInput").value);
    var number2 =  Number(document.getElementById("numberTwoInput").value);
    var result = number1 / number2;
    document.getElementById("answer").value = result;
}


window.onload = function init(){
    var addButtonOne = document.getElementById("addButton")
    addButtonOne.onclick = addButtonClick;

    var subtractButtonOne = document.getElementById("subtractButton")
    subtractButtonOne.onclick = subtractButtonClick;

    
    var multiplyButtonOne = document.getElementById("multiplyButton")
    multiplyButtonOne.onclick = multiplyButtonClick;

    
    var divideButtonOne = document.getElementById("divideButton")
    divideButtonOne.onclick = divideButtonClick;
}