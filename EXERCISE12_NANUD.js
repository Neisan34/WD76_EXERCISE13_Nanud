//console.log("Hello World");
/*console.log("Hello World");
console.log("Hello World");

let data = "Whydidyouhavetoleaveme";

alert("Hello World");
document.write("Hello World");
document.getElementById("paragraph3").innerHTML = "Chosen Text";

alert(data);
alert(data); */

//Let Variable - the value is interchangeable

let var1 = "Nathan";

var1 = "Yeagar";

//alert(var1);

//Constant Variable - the value of this variable can't be changed

const var2 = "Uzumaki Naruto";
// var 2 = "Hinata Hyuga";
alert(var2);

// DATA TYPES

//STRING
let variableString = "I am a Sample String";

//alert(variableString);

// NUMBER

let variableNumber = 15;

alert(variableNumber);

let variableBoolean = false;

alert(variableBoolean);

// Array
let student = ["Naruto","Sakura", "Sasuke", "Kakashi"];

// alert(student);
// Multiple Call of Information 

// alert(student[3]);

function sampleFunction(){
    alert("Hello World 1");
    alert("Hello World 2");
    alert("Hello World 3");
}

function showName(name, age){
    alert("This ninja is");
    alert (name);
    alert("His age is");
    alert(age);

}
function showSum(a, b){
    let sum = a + b;
    alert(sum);
}
function showSum2(){
    let a = 1;
    let b = 2;
    let sum = a + b;
    alert(sum);
}
function showSumFinal(){
    let a = document.getElementById("operand1").value;
    let b = document.getElementById("operand2").value;    
    alert(a)
}

function showSumFinal(){
    let a = Number(document.getElementById("operand1").value)
    let b = Number(document.getElementById("operand2").value)
    let sum = a + b;
    alert(sum);
}
function showDifferenceFinal(){
    let a = Number(document.getElementById("operand1").value)
    let b = Number(document.getElementById("operand2").value)
    let result = a - b;
    alert(result);
}
function showProductFinal(){
    let a = Number(document.getElementById("operand1").value)
    let b = Number(document.getElementById("operand2").value)
    let result = a * b;
    alert(result);
}
function showQuotientFinal(){
    let a = Number(document.getElementById("operand1").value)
    let b = Number(document.getElementById("operand2").value)
    let result = a / b;
    alert(result);
}

//sampleFunction();
// This is how we call a function

let samp1 = 5;
let samp2 = 3;

let exponentiation = samp1 ** samp2;
//alert(exponentiation);
// Exponentiation gets the result for base and exponent (base ** exponent)

let modulus = samp1 % samp2;
alert(modulus);
// Modulus gets the remainder of the two values 