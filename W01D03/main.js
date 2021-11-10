//Pulse Check
//Figure out the syntax errors in the following functions, and fix them.
//const myFunction = function parameter) {}
const myFunction = function( parameter) {}
//const my Second Function = function (parameter) {}
const mySecondFunction = function (parameter) {}
//const function = function (parameter) {}
const function1 = function (parameter) {}
//const functionName = function (paramOne paramTwo) {}
const functionName = function (paramOne ,paramTwo) {}

//2 Write a function sayHello that returns Hello when executed.

const sayHello =function (x) {
    return x;}


//3Write a function myAge that accepts one argument age and returns the age when executed.
const myAge = function (age) {
return(age);

}
//4
//Write a function incrementOne that accepts one argument number and returns the number incremented by one when executed.
const incrementOne = function (number) {
    
    return(number+1);
    
}
//5 Write a function greet that accepts one argument name and returns a string saying as shown below.
const greet = function (name) { 

return name;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Practice
//1
//Write a function double that accepts one argument number and returns the number doubled.
const double = function (number) {
    return 2*number;
    //console.log(number);
}
//2
//Write a function fullName that accepts string arguments, firstName and lastName then returns a string containing your full name combined.
const fullName = function (firstName, lastName) {
return firstName+lastName;}

//3
//Write a function average that accepts two number arguments and returns the average of these numbers.
const average = function (a, b){

let avg=(a+b)/2
return avg;
console.log(avg);
}
//4
//Using the defined functions below and your average function try to guess the output of the following expressions without executing the functions.
const square = function (number) {
    //return number * number;
    let result=number*number;
    return result;
    console.log(result);
  };

  const cube = function (number) {
      let result1=number*number*number;
      return result1;
      console.log(result1);
  };
  //5
  //Write a function totalBill that accepts three arguments total, taxPercentage, tip and returns the total after adding the tax and the tip
       
  const totalBill = function (total, taxPercentage, tip)  {
    return total+(total*taxPercentage)+tip;
    
    }

     

//Write a function ageInHours that accepts a number argument ageInYears and returns the age in hours (ignore leap years).  
const ageInHours = function (ageInYears){
let ageday = ageInYears*365;
return ageday*24;


}

//Write a function calculateProfit that accepts three arguments unitsSold, unitCost, unitPrice and returns the net profit.
const calculateProfit = function (unitsSold, unitCost, unitPrice) {
  let netprofit = unitsSold *(unitPrice-unitCost);
 return netprofit;

}
//Write a function toThePowerOf that accepts two number arguments, base and exponent, and returns the base to the exponent power.
const toThePowerOf = function (base, exponent) {
   return  Math.pow(base, exponent);
   

}

 //Write a function upperCase that accepts a string argument string and returns the same string in upper case.
 
const upperCase = function (string) {
    return upperCase.toUpperCase();   
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Write a function randomNumber that returns a random value between zero and one (includes 0 but not 1).

const randomNumber = function () 
{
return Math.random();

}
//Write a function oneOrZero that uses randomNumber to return either the number zero or one. {
    const oneOrZero = function () {
return console.log(getRandomInt(number));

}

//write a function fromTo that accepts two positive number arguments, start and end, returning a random number in between the start and the end value.
const fromTo = function (start, end) {
    return Math.floor(Math.random() * (start - end + 1) +end); } 

//write a function randomCharacter that accepts a string argument string and returns a random character from that string.
const randomCharacter = function (string) {
let char=string.length;
let randomnum=Math.floor(Math.random()*char);
return randomnum;

}