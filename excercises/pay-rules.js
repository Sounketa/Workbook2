"use strict";

//declare variables
var regularPayRate = 17.30;
var overtimePayRate = 25.95

var hoursWorked = 40;
var overtimeHours = 5;
var grossPay = regularPayRate * hoursWorked;

//declare calculation
if (hoursWorked >= 40) {
    grossPay = regularPayRate * hoursWorked + overtimePayRate * overtimeHours;
}

//display result

console.log(grossPay);



// var payRate = 25.00;
// var hrsWorked = 40;
// var pay;

// pay = payRate * hrsWorked;

// console.log(pay)



// if (hoursWorked >= 40) {
//     payRate = payRate * 1.5;
// }
// grossPay = payRate * hoursWorked;

// console.log(grossPay);