/* 1.Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers
by the given num length over the specified interval (from a to b).*/

function evenlySpacedNums(a, b, num) {
  let myArr = [];

  if (num === 1) {
    myArr.push(a);
    return myArr;
  }

  if (a === b) {
    myArr.push(0);
    return myArr; // inchu chi ashxatum??
  }
  let n = (b - a) / (num - 1);

  for (let i = a; i <= b; i += n) {
    i = +i.toFixed(1);
    myArr.push(i);
  }
  myArr[myArr.length - 1] = b;
  return myArr;
}

evenlySpacedNums(1, 5, 6);

/* 2.Given an array of numbers. Find the index of the second maximum element*/
function getSecondMax(arr) {
  let max = Math.max(...arr);
  let newArr = [];
  for (let item of arr) {
    if (item === max) continue;
    newArr.push(item);
  }
  let secondMax = Math.max(...newArr);
  let index = arr.indexOf(secondMax);
  return index;
}

getSecondMax([-60, 2, 43, -18, 5, -19, 36, 7, 56]);

/* 3. Given an array of numbers, padding amount and repeat count. Pad the array in the
following way: the padding amount specifies how many elements should be taken from
the array edges, the repeat amount specifies how many times the pad should be
repeated. Also, you should check that padding amount <= length of array*/

function padTheArray(array, pad, n) {
  let newArr = [];
  if (pad > array.length) {
    return "Invalid padding amount";
  }
  let add = array.slice(0, pad);
  add = add.join("").repeat(n).split("");
  let addEnd = array.slice(array.length - pad);
  addEnd = addEnd.join("").repeat(n).split("");

  newArr = add.concat(array).concat(addEnd).map(Number);
  return newArr;
}
padTheArray([1, 2, 3, 4], 2, 2);

/* 4. Write a function which receives an array and a number as arguments and returns a new array
from the elements of the given array which are larger than the given number. */

const getLargerNumsss = (arr, num) => {
  let largerNums = [];
  for (let item of arr) {
    if (item > num) {
      largerNums.push(item);
    }
  }
  if (largerNums.length === 0) {
    return "Such values do not exist.";
  }
  return largerNums;
};

getLargerNumsss([10, 25, 16, -5, 30, 15, 24], 16);

/* 5. Write a function, which receives two numbers as arguments and finds all numbers between
them such that each digit of the number is even. The numbers obtained should be printed in a
comma-separated sequence on a single line.*/

function isOdd(n) {
  if (n % 2 === 0) {
    return false;
  }
  return true;
}

function areAllEven(num) {
  while (num) {
    let digit = num % 10;
    if (isOdd(digit) || digit === 0) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}
areAllEven(26);

function getAllEvens(a, b) {
  let evenNums = "";
  for (let i = a; i <= b; i++) {
    if (areAllEven(i)) {
      evenNums += i + ", ";
    }
  }
  evenNums = evenNums.slice(0, evenNums.length - 2);
  return evenNums;
}
getAllEvens(23, 99);
