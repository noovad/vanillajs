/**
 * LOGIC & ALGORITHM TEST COLLECTION
 * JavaScript
 */

// ========================================
// 1. FIZZBUZZ
// ========================================
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(4);

// ========================================
// 2. REVERSE STRING
// ========================================
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// ========================================
// 3. PALINDROME
// ========================================
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// ========================================
// 4. FACTORIAL
// ========================================
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// ========================================
// 5. FIBONACCI
// ========================================
function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);

    let temp = a + b;
    a = b;
    b = temp;
  }
}

// ========================================
// 6. PRIME NUMBER
// ========================================
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// ========================================
// 7. COUNT VOWELS
// ========================================
function countVowels(str) {
  let count = 0;
  const vowels = "aiueoAIUEO";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

// ========================================
// 8. MAX NUMBER IN ARRAY
// ========================================
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// ========================================
// 9. MIN NUMBER IN ARRAY
// ========================================
function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// ========================================
// 10. SUM ARRAY
// ========================================
function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

// ========================================
// 11. AVERAGE ARRAY
// ========================================
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}

// ========================================
// 12. LINEAR SEARCH
// ========================================
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// ========================================
// 13. BINARY SEARCH
// ========================================
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// ========================================
// 14. BUBBLE SORT
// ========================================
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// ========================================
// 15. SELECTION SORT
// ========================================
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

// ========================================
// 16. REMOVE DUPLICATE
// ========================================
function removeDuplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(arr[i]);
    }
  }

  return result;
}

// ========================================
// 17. COUNT CHARACTER
// ========================================
function countCharacter(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// ========================================
// 18. STAR TRIANGLE
// ========================================
function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

// ========================================
// 19. INVERTED TRIANGLE
// ========================================
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

// ========================================
// 20. PYRAMID
// ========================================
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let s = 1; s <= n - i; s++) {
      row += " ";
    }

    for (let j = 1; j <= i * 2 - 1; j++) {
      row += "*";
    }

    console.log(row);
  }
}

// ========================================
// 21. NUMBER PYRAMID
// ========================================
function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j;
    }

    console.log(row);
  }
}

// ========================================
// 22. SWAP TWO NUMBERS
// ========================================
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;

  return [a, b];
}

// ========================================
// 23. GCD (FPB)
// ========================================
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// ========================================
// 24. LCM (KPK)
// ========================================
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// ========================================
// 25. POWER
// ========================================
function power(base, exp) {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= base;
  }

  return result;
}

// ========================================
// 26. ARMSTRONG NUMBER
// ========================================
function isArmstrong(num) {
  let original = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
  }

  return sum === original;
}

// ========================================
// 27. SECOND LARGEST
// ========================================
function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second && arr[i] !== max) {
      second = arr[i];
    }
  }

  return second;
}

// ========================================
// 28. COUNT WORDS
// ========================================
function countWords(str) {
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }

  return count;
}

// ========================================
// 29. REVERSE NUMBER
// ========================================
function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed;
}

// ========================================
// 30. ANAGRAM
// ========================================
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = str1.split("");
  let arr2 = str2.split("");

  bubbleSort(arr1);
  bubbleSort(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
