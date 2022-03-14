function writeLine(title) {
  console.log(`\n>-----------------< ${title} >-----------------<`);
}
writeLine("EXERCISE 12");
/* 
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/

const checkArray = function (n) {
  let sum = 0;
  let newArr = [];

  for (let i = 0; i < n; i++) {
    newArr.push(Math.floor(Math.random() * 10));
    if (newArr[i] > 5) {
      sum += newArr[i];
    }
    return sum;
  }

  return newArr;
};

console.log(checkArray(6));

writeLine("EXERCISE 12");
/* 
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
let kenArray = [
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 5, name: "taiwo", id: "england", quatity: 16 },
  { price: 7, name: "abiodun", id: "spain", quatity: 25 },
  { price: 7, name: "obi", id: "spain", quantity: 25 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
];

const shippingCartTotal = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr.length;
  }
};
console.log(shippingCartTotal(kenArray));
writeLine("EXERCISE 13");
/*
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

function addToShoppingCart(addOrder) {
  console.log(arraysOfObject);
  for (let i = 0; (i = arraysOfObject.length); i++)
    return [...arraysOfObject.concat(addOrder)];
}
let arraysOfObject = [
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 5, name: "taiwo", id: "england", quatity: 16 },
  { price: 7, name: "abiodun", id: "spain", quatity: 25 },
];
let newOrder = [
  { price: 7, name: "obi", id: "spain", quantity: 25 },
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
];
//let newOrder = { price: 9, name: "yusuf", id: "germany", quatity: 10 };

console.log("ken array", addToShoppingCart(newOrder));
writeLine("EXERCISE 14");
/*
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/
const maxShoppingCart = (arr) => {
  let p = [];
  for (let i = 0; i < arr.length; i++) {
    let array = arr[i];
    p.push(parseInt(array.price));
  }
  return Math.max(...p);
};
console.log(maxShoppingCart(arraysOfObject));
// for (let i = 0; i < arr.length; i++)
// if (
//   arraysOfObject[0].price > arraysOfObject[1].price &&
//   arraysOfObject[0].price > arraysOfObject[2].price
// ) {
//   return `${arraysOfObject[0].price} in this shipping has the most expensive price in this array`;
// } else if (
//   arraysOfObject[1].price > arraysOfObject[0].price &&
//   arraysOfObject[1].price > arraysOfObject[2].price
// ) {
//   return `${arraysOfObject[1].price} in this shipping has the most expensive price in this array`;
// } else if (
//   arraysOfObject[2].price > arraysOfObject[0].price &&
//   arraysOfObject[2].price > arraysOfObject[1].price
// ) {
//   return `${arraysOfObject[2].price} in this shipping has the most expensive price in this array`;
// }
// };
console.log(maxShoppingCart(arraysOfObject));
// what if we had more than 3 items in an array?
writeLine("EXERCISE 15");
/* 
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
let arraysOfObject2 = [
  { price: 3, name: "yusuf", id: "germany", quatity: 10 },
  { price: 5, name: "taiwo", id: "england", quatity: 16 },
  { price: 7, name: "abiodun", id: "spain", quatity: 25 },
];

const latestShoppingCart = (arr) => {
  for (let i = 0; (i = arr.length); i++) return arr.pop();
};

console.log(latestShoppingCart(arraysOfObject2));

writeLine("EXERCISE 16");
/* 
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 17");
/* 
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/
function average(arr) {
  let result = {
    sum: 0,
    avgArr: [],
    avg: 0,
  };
  for (i = 0; i < arr.length; i++) {
    let newArr = arr[i];
    if (!isNaN(newArr)) {
      result.avgArr.push(parseInt(newArr));
      result.sum += parseInt(newArr);
      result.avg = parseInt(result.sum) / result.avgArr.length;
    }
  }
  return result;
}
console.log(average([2, 3, 5, 9, "aunty", "yusuf"]));
writeLine("EXERCISE 18");
/* 
Write a function "longest" to find the longest string from an given array of strings.
*/
let str1 = ["strive", "is", "greathhh", "hhgghvgfhh", "thergebdndghgg"];
// for (let i = 0; i < str1.length; i++) str1[i] = str1[i].length;
// console.log(str1);
const longest = (str) => {
  var value = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].length;
    console.log(str);
    // const maximumNum = Math.max(...str);
    const myMax = str.reduce(function (a, b) {
      return Math.max(a, b);
    });
    value = myMax;
    console.log("myMax", typeof myMax);

    //const newValue = indexOf(maximumNum);
    //return newValue;
  }
  return value;
};
console.log(longest(str1));
writeLine("EXERCISE 19");
/*
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* WRITE YOUR CODE HERE */
writeLine("EXERCISE 20");
/* 
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

//function howManyDays(selectedDate) {
//   let today = new Date();
//   let difference = today - selectedDate;
//   return difference / (1000 * 60 * 60 * 24);
// }
// console.log(howManyDays(12));

writeLine("EXERCISE 21");
/*
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
function whatDayIsIt() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let dayName = days[date.getDay()];
  return dayName;
}
console.log(whatDayIsIt());
