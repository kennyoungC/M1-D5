/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/
function writeLine(title) {
  console.log(`\n>-----------------< ${title} >-----------------<`);
}
writeLine("EXERCISE 1");
/* 
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  let result = l1 * l2;
  return result;
}
let length = 4;
let width = 7;
console.log(area(length, width));

writeLine("EXERCISE 2");
/*
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(int1, int2) {
  if (int1 === int2) {
    let multBy3 = (int1 + int2) * 3;
    console.log(multBy3);
  } else {
    let justSum = int1 + int2;
    console.log(justSum);
  }
}

let firstNumber = 10;
let secondNumber = 6;
crazySum(firstNumber, secondNumber);

writeLine("EXERCISE 3");
/* 
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

// function crazyDiff(givenNumber, constant) {
//   if (givenNumber > 19 && constant === 19) {
//     let tripleReturnDifference = 3 * (givenNumber - 19);
//     console.log(tripleReturnDifference);
//   } else {
//     let absoluteDifference = givenNumber - constant;
//     console.log(absoluteDifference);
//   }
// }
// crazyDiff(24, 19);
// function crazyDiff(n) {
//   if (n > 19) {
//     return Math.abs(n - 19)* 3
//   } else
//   return Math.abs(n - 19)
// }
const crazyDiff = (n) => {
  return n > 19 ? Math.abs(n - 19) * 3 : Math.abs(n - 19);
};
console.log(crazyDiff(16));
writeLine("EXERCISE 4");
/*
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

// function boundary(n) {
//   if ((n > 20 && n <= 100) || n === 400) {
//     let n = true;
//     console.log(n);
//   } else {
//     console.log(false);
//   }
// }

const boundary = (n) => {
  return (n > 20 && n <= 100) || n === 400 ? true : false;
};
console.log(boundary(400));
writeLine("EXERCISE 5");
/* 
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// function strivify(inString) {
//   if (inString.startsWith("strive")) {
//     return inString;
//   } else {
//     return "strive " + inString;
//   }
// }

const strivify = (inString) => {
  return inString.startsWith("strive") ? inString : "strive " + inString;
};

console.log(strivify("is the best coding school"));
writeLine("EXERCISE 6");
/*
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
// function check3and7(positivenumber) {
//   if (positivenumber % 3 === 0 || positivenumber % 7 === 0)
//     console.log(positivenumber);
//   else console.log(`you can only input a multiply of 5 or 3 here, thank you`);
// }

const check3and7 = (positivenumber) => {
  return positivenumber % 3 === 0 || positivenumber % 7 === 0
    ? `${positivenumber} is a multiple of 3 or 7`
    : `you can only input a multiple of 5 or 3 here, thank you`;
};
console.log(check3and7(6));
/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 7");
/*
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

// function reverseString(givenString) {
//   let newString = "";
//   for (let i = givenString.length - 1; i >= 0; i--) {
//     newString += givenString[i];
//   }
//   return newString;
// }
// const reverseString = (givenString) => {
//   let newString = "";
//   for (let i = givenString.length - 1; i >= 0; i--) {
//     newString += givenString[i];
//   }
//   return newString;
// };
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("hello world"));
writeLine("EXERCISE 8");
/* 
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
// function upperFirst(str) {
//   let words = str.toLowerCase().split(" ");
//   console.log(words);
//   for (i = 0; i < words.length; i++) {
//     // console.log(words[i]);
//     // console.log(words[i].charAt(0));
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//   }
//   return words.join(" ");
// }
const upperFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(upperFirst("yusuf is a fine boy"));
writeLine("EXERCISE 9");
/*
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

// let cutString = function (str3) {
//   return str3.slice(1, str3.length - 1);
// };
const cutString = (str3) => str3.slice(1, str3.length - 1);
console.log(cutString("we are heading home"));
writeLine("EXERCISE 10");
/*
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * 10);
    arr.push(random);
  }
  return arr;
};
console.log(giveMeRandom(2));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
