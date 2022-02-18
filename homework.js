/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/
let writeLine = function (title) {
  console.log(`\n>-----------------< ${title} >-----------------<`);
};
writeLine("EXERCISE 1");
/* 
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

let area = function (l1, l2) {
  let result = l1 * l2;
  return result;
};
let length = 4;
let width = 7;
let myans = area(length, width);

writeLine("EXERCISE 2");
/*
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function (int1, int2) {
  if (int1 === int2) {
    let multBy3 = (int1 + int2) * 3;
    console.log(multBy3);
  } else {
    let justSum = int1 + int2;
    console.log(justSum);
  }
};

let firstNumber = 10;
let secondNumber = 6;
crazySum(firstNumber, secondNumber);

// const crazySum = function (num1, num2) {
//   intNum1 = parseInt(num1);
//   intNum2 = parseInt(num2);

//   if (intNum1 === intNum2) {
//     let multBy3 = (intNum1 + intNum2) * 3;
//     console.log(multBy3);
//   } else {
//     let justSum = intNum2 + intNum2;
//     console.log(justSum);
//   }
// };
// crazySum(2, 2);

writeLine("EXERCISE 3");
/* 
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = function (givenNumber, constant) {
  if (givenNumber > 19 && constant === 19) {
    let tripleReturnDifference = 3 * (givenNumber - 19);
    console.log(tripleReturnDifference);
  } else {
    let absoluteDifference = givenNumber - constant;
    console.log(absoluteDifference);
  }
};
crazyDiff(24, 19);

writeLine("EXERCISE 4");
/*
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

let boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    let n = true;
    console.log(n);
  } else {
    console.log(false);
  }
};

boundary(12);

writeLine("EXERCISE 5");
/* 
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// let strivify = function (inString) {
//   if (inString === "Strive") {
//     console.log(inString);
//   } else {
//     let striveFront = "Strive";
//     console.log(striveFront.concat(" ", inString));
//   }
// };
// strivify("strive house");
// writeLine("EXERCISE 6");
// /*
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
let check3and7 = function (positivenumber) {
  if (positivenumber % 3 === 0 || positivenumber % 7 === 0)
    console.log(positivenumber);
  else console.log(`you can only input a multiply of 5 or 3 here, thank you`);
};
check3and7(4);
/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 7");
/*
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 8");
/* 
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 9");
/*
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 10");
/*
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
