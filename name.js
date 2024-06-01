//1
function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

//2
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));
console.log(isEven(7));

//3
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));
console.log(sum(10, 20));

//4
function findSmallestNum(arr) {
  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  return small;
}
console.log(findSmallestNum([3, 5, 1, 9]));
console.log(findSmallestNum([-1, -5, 0, 10]));

//5
function countVowels(str) {
  let numOfVowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      numOfVowels++;
    } else if (
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      numOfVowels++;
    }
  }
  return numOfVowels;
}
console.log(countVowels("hello world"));
console.log(countVowels("Javascript"));

//6
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));

//7
function isArrayEmpty(arr) {
  if (arr == "") {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1, 2, 3]));

//8
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
console.log(factorialize(5));
console.log(factorialize(7));

//9
function reverseString(str) {
  let reverseValue = "";
  for (let i = 0; i < str.length; i++) {
    reverseValue = str[i] + reverseValue;
  }
  return reverseValue;
}
console.log(reverseString("hello"));
console.log(reverseString("world"));

//10
function toLowerCase(str) {
  return str.toLowerCase();
}
console.log(toLowerCase("HELLO WORLD"));
console.log(toLowerCase("JavaScript"));

//11
function stringLength(str) {
  return str.length;
}
console.log(stringLength("hello"));
console.log(stringLength("world"));

//12
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));

//13
function getLastElement(arr) {
  return arr.pop();
}
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

//14
function getFirstCharacter(str) {
  return str[0];
}
console.log(getFirstCharacter("hello"));
console.log(getFirstCharacter("world"));

//15
function sumArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([-1, -2, -3, -4]));
console.log(sumArray([1.5, 2.5, 3.5]));