/* 1. Given an array of numbers. Print frequency of each unique number. (Frequency is the
count of particular element divided by the count of all elements)*/

function getElFrequency(arr) {
  let count = 0;
  let tempArr = [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let frequency = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    frequency = count / arr.length;
    tempArr.push(arr[i] + ": " + frequency);
    count = 0;
  }
  for (let item of tempArr) {
    if (newArray.includes(item)) continue;
    newArray.push(item);
  }
  return newArray;
}

console.log(getElFrequency([1, 1, 2, 2, 3]));

/* 2. Given an array of strings and numbers. Print the number of integers and the number of
strings in the array. */

function getNumOfTypes(arr) {
  let numOfTypes = {};
  let stringCount = 0;
  let numCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numCount++;
    } else {
      stringCount++;
    }
  }
  numOfTypes.Numbers = numCount;
  numOfTypes.Strings = stringCount;
  return numOfTypes;
}

console.log(getNumOfTypes([1, "10", "hi", 2, 3]));

/* 3. Write a function that accepts a string(a sentence) as a parameter and finds the longest
word within the string If there are several words which are the longest ones, print the
last word(words can be separated by space, comma or hyphen). */

function getTheLongestWord(str) {
  let arr = str.split(" ");
  let newArray = [];
  for (let word of arr) {
    newArray.push(word.length);
  }
  let max = Math.max(...newArray);
  let index = newArray.lastIndexOf(max);

  return arr[index];
}

console.log(
  getTheLongestWord(
    "A revolution without dancing is a revolution not worth having"
  )
);

/* 4. Write a function to find longest substring in a given a string without repeating characters
except space character.If there are several, return the last one. Consider that all letters are lowercase.*/

function getLongestSubstring(str) {
  let miniArr = [];
  let bigArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") continue;
    if (miniArr.includes(str[i])) {
      break;
    }
    miniArr.push(str[i]);
  }
  bigArr.push(miniArr);
  str = str.slice(1);
  //chgitem vonc sharunakem
  return bigArr;
}

console.log(getLongestSubstring("jshjgdfdg"));

/* 5. Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so "abc" yields "bca". Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.*/

function replaceChars(str) {
  let myArray = [];

  for (let i = 0; i <= str.length; i++) {
    let miniStr = str.slice(0, 3);
    myArray.push(miniStr);
    str = str.slice(3);
  }
  for (let j = 0; j < myArray.length; j++) {
    let el = myArray[j][0];
    myArray[j] = myArray[j].slice(1);
    myArray[j] = myArray[j] + el;
  }
  return myArray;
}

console.log(replaceChars("xooklpghdyu"));

/* 6. Write a function, which receives an array as an argument which elements arrays of
numbers. Find biggest negative number of each array. Return product of that numbers.If
there is not any negative number in an array, ignore that one. Check that items of the
given array are arrays.*/

let arr = [
  [2, -9, -3, 0],
  [1, 2],
  [-4, -11, 0],
];
function getProductofNegatives(arr) {
  let newArray = [];
  let max = 0;
  let product = 1;

  for (let item of arr) {
    let neg = [];
    if (Array.isArray(item) === false) {
      alert("Invalid Argument");
    }
    for (let char of item) {
      if (char < 0) {
        neg.push(char);
      }
    }
    max = Math.max(...neg);
    if (max === -Infinity) continue;
    newArray.push(max);
  }

  if (newArray.length === 0) {
    return "no negatives";
  }

  for (let el of newArray) {
    product *= el;
  }
  return product;
}

getProductofNegatives(arr);

/* 7. Write a JavaScript function to get all possible subsets of length 3 of the given array.
Assume that all elements in the array are unique.*/

//chem karoghacel
