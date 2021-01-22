// 1. Write a recursive function to determine whether all digits of the number are odd or not.

function areAllDigitsOdd(num) {
  if (num < 10) {
    return num % 2 === 0 ? false : true;
  } else {
    return areAllDigitsOdd(num % 10);
  }
}

console.log(areAllDigitsOdd(579));

// 2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
//element does not exist, return -1)

function getMinPos(arr) {
  arr = arr.filter((item) => item >= 0);
  if (!arr.length) return -1;
  if (arr.length === 1) {
    return arr[0];
  } else {
    return getMinPos(arr.slice(2).concat(arr[0] < arr[1] ? arr[0] : arr[1]));
  }
}

console.log(getMinPos([56, -9, 87, -23, 0, -105, 55, 1]));

//3. Given an array of numbers which is almost sorted in ascending order. Find the index where
//sorting order is violated.

function findSortDisorder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return arr.indexOf(arr[i]);
  }
  return -1;
}

findSortDisorder([-9, -4, -4, 3, 4, 5]);

//4. Write recursive, memorized function to get n-th Fibonacci number

function getNthFibonacci(n) {
  return n <= 1 ? n : getNthFibonacci(n - 1) + getNthFibonacci(n - 2);
}

console.log(getNthFibonacci(8));

//5. Given an array. Write a recursive function that removes the first element and returns
//the given array. (without using arr.unshift(),assign second element to first, third element to
//second...)

let array = [6, 78, "n", 0, 1];
const n = array.length; //const -y chgitem vonc pahem, functioni nersum pokhvum a
function removeFirstEl(array) {
  if (array.length === 1) return [];
  return array.length === n - 1 ? array : removeFirstEl(array.slice(1));
}

removeFirstEl([6, 78, "n", 0, 1]);
