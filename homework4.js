//1. Given an array of nested arrays. Write a recursive function
//that flattens it. (Hint create function that concats arrays)

function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

flattenArray([14, [1, [[3, []]]], 1, 0]);

//2. Given a number. Write a function that calculates its sum of
//the digits and if that sum has more than 1 digit find the sum of
//digits of that number. Repeat that process if needed and return
//the result.

function sumOne(n) {
  let sum = 0;
  while (n) {
    let digit = n % 10;
    n = Math.floor(n / 10);
    sum += digit;
  }
  return sum < 10 ? sum : sumNums(sum);
}

sumOne(9999);

//3. Given an array and a number N. Write a recursive
//function that rotates an array N places to the left. (Hint: to
//add element to the beginning use arr.unshift())

function rotateArr(arr, N) {
  arr.unshift(arr.pop());
  return N === 1 ? arr : rotateArr(arr, N - 1);
}

rotateArr([1, 2, 3, 4, 5], 6);

//4. Given an object. Invert it (keys become values and values
//become keys). If there is more than key for that given value
//create an array

//chkaroxaca

//5. Given the list of the following readers:

let list = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

function bookPercentDescend(array) {
  return array
    .filter((item) => item.readStatus === true)
    .sort(function (a, b) {
      return b.percent - a.percent;
    });
}

bookPercentDescend(list);
