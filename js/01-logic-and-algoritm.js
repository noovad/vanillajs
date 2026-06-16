// ========================================
// SOAL 1: FizzBuzz
// Tampilkan angka 1 sampai n.
// Kelipatan 3 => Fizz
// Kelipatan 5 => Buzz
// Kelipatan 3 dan 5 => FizzBuzz
// ========================================

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(15);
// 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz


// ========================================
// SOAL 2: Reverse String
// Balikkan string tanpa menggunakan reverse()
// ========================================

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("javascript"));
// tpircsavaj


// ========================================
// SOAL 3: Palindrome
// Cek apakah sebuah kata merupakan palindrome
// katak => true
// mobil => false
// ========================================

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("katak")); // true
console.log(isPalindrome("mobil")); // false


// ========================================
// SOAL 4: Factorial
// Hitung faktorial dari n (n!)
// 5! = 5x4x3x2x1 = 120
// ========================================

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
// 120


// ========================================
// SOAL 5: Fibonacci
// Tampilkan n angka pertama dari deret Fibonacci
// 0,1,1,2,3,5,8,...
// ========================================

function fibonacci(n) {
  const result = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

console.log(fibonacci(8));
// [0,1,1,2,3,5,8,13]


// ========================================
// SOAL 6: Prime Number
// Cek apakah sebuah angka merupakan bilangan prima
// ========================================

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


// ========================================
// SOAL 7: Armstrong Number
// Cek apakah angka adalah Armstrong Number
// (jumlah pangkat n dari setiap digit = angka itu sendiri)
// 153 => 1^3 + 5^3 + 3^3 = 153 => true
// ========================================

function isArmstrong(num) {
  const digits = String(num).split("");
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
  return sum === num;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false


// ========================================
// SOAL 8: Reverse Number
// Balikkan urutan digit dari sebuah angka
// 1234 => 4321
// ========================================

function reverseNumber(num) {
  let reversed = 0;
  let n = Math.abs(num);

  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }

  return num < 0 ? -reversed : reversed;
}

console.log(reverseNumber(1234));
// 4321


// ========================================
// SOAL 9: Count Digits
// Hitung jumlah digit dari sebuah angka
// 12345 => 5
// ========================================

function countDigits(num) {
  if (num === 0) return 1;
  let n = Math.abs(num);
  let count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

console.log(countDigits(12345));
// 5


// ========================================
// SOAL 10: GCD (FPB)
// Cari Faktor Persekutuan Terbesar dari dua angka
// FPB(12, 18) => 6
// ========================================

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

console.log(gcd(12, 18));
// 6


// ========================================
// SOAL 11: LCM (KPK)
// Cari Kelipatan Persekutuan Terkecil dari dua angka
// KPK(4, 6) => 12
// ========================================

function gcdHelper(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcdHelper(a, b);
}

console.log(lcm(4, 6));
// 12


// ========================================
// SOAL 12: Find Max
// Temukan angka terbesar dalam array
// ========================================

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log(findMax([10, 5, 90, 1, 30]));
// 90


// ========================================
// SOAL 13: Find Min
// Temukan angka terkecil dalam array
// ========================================

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(findMin([10, 5, 90, 1, 30]));
// 1


// ========================================
// SOAL 14: Sum Array
// Hitung total semua angka dalam array
// ========================================

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5]));
// 15


// ========================================
// SOAL 15: Average Array
// Hitung rata-rata dari semua angka dalam array
// ========================================

function averageArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(averageArray([1, 2, 3, 4, 5]));
// 3


// ========================================
// SOAL 16: Remove Duplicate
// Hapus elemen duplikat dari array
// ========================================

function removeDuplicate(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
// [1,2,3,4,5]


// ========================================
// SOAL 17: Second Largest
// Cari angka terbesar kedua dalam array
// ========================================

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 90, 1, 30]));
// 30


// ========================================
// SOAL 18: Missing Number
// Cari angka yang hilang dari array 1 sampai n
// [1,2,4,5] (n=5) => 3
// ========================================

function missingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 4, 5], 5));
// 3


// ========================================
// SOAL 19: Merge Array
// Gabungkan dua array dan urutkan hasilnya
// ========================================

function mergeArray(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b);
}

console.log(mergeArray([5, 1, 3], [4, 2, 6]));
// [1,2,3,4,5,6]


// ========================================
// SOAL 20: Rotate Array
// Putar (rotate) array ke kanan sebanyak k posisi
// [1,2,3,4,5] k=2 => [4,5,1,2,3]
// ========================================

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4,5,1,2,3]


// ========================================
// SOAL 21: Linear Search
// Cari index dari sebuah nilai dalam array
// Jika tidak ditemukan, return -1
// ========================================

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([5, 3, 8, 1, 9], 8));
// 2


// ========================================
// SOAL 22: Binary Search
// Cari index dari sebuah nilai dalam array yang sudah terurut
// Jika tidak ditemukan, return -1
// ========================================

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));
// 3


// ========================================
// SOAL 23: Bubble Sort
// Urutkan array dari kecil ke besar
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

console.log(bubbleSort([5, 2, 8, 1, 3]));
// [1,2,3,5,8]


// ========================================
// SOAL 24: Selection Sort
// Urutkan array dari kecil ke besar menggunakan Selection Sort
// ========================================

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([5, 2, 8, 1, 3]));
// [1,2,3,5,8]


// ========================================
// SOAL 25: Insertion Sort
// Urutkan array dari kecil ke besar menggunakan Insertion Sort
// ========================================

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([5, 2, 8, 1, 3]));
// [1,2,3,5,8]


// ========================================
// SOAL 26: Count Vowels
// Hitung jumlah huruf vokal (a,i,u,e,o) dalam string
// ========================================

function countVowels(str) {
  const vowels = "aiueoAIUEO";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }

  return count;
}

console.log(countVowels("javascript"));
// 3


// ========================================
// SOAL 27: Count Consonants
// Hitung jumlah huruf konsonan dalam string
// ========================================

function countConsonants(str) {
  const vowels = "aiueoAIUEO";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countConsonants("javascript"));
// 7


// ========================================
// SOAL 28: Count Character
// Hitung berapa kali sebuah karakter muncul dalam string
// ========================================

function countCharacter(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }

  return count;
}

console.log(countCharacter("javascript", "a"));
// 2


// ========================================
// SOAL 29: Count Words
// Hitung jumlah kata dalam sebuah kalimat
// ========================================

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords("saya sedang belajar javascript"));
// 4


// ========================================
// SOAL 30: Anagram
// Cek apakah dua string merupakan anagram satu sama lain
// "listen" dan "silent" => true
// ========================================

function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


// ========================================
// SOAL 31: Triangle
// Tampilkan pola segitiga siku-siku dari bintang (*)
// ========================================

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

triangle(5);
// *
// **
// ***
// ****
// *****


// ========================================
// SOAL 32: Inverted Triangle
// Tampilkan pola segitiga terbalik dari bintang (*)
// ========================================

function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

invertedTriangle(5);
// *****
// ****
// ***
// **
// *


// ========================================
// SOAL 33: Pyramid
// Tampilkan pola piramida dari bintang (*)
// ========================================

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

pyramid(5);
//     *
//    ***
//   *****
//  *******
// *********


// ========================================
// SOAL 34: Inverted Pyramid
// Tampilkan pola piramida terbalik dari bintang (*)
// ========================================

function invertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

invertedPyramid(5);
// *********
//  *******
//   *****
//    ***
//     *


// ========================================
// SOAL 35: Diamond
// Tampilkan pola diamond (gabungan piramida dan piramida terbalik)
// ========================================

function diamond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

diamond(4);
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *


// ========================================
// SOAL 36: Two Sum
// Cari dua angka dalam array yang jumlahnya sama dengan target
// Return index dari kedua angka tersebut
// nums=[2,7,11,15], target=9 => [0,1]
// ========================================

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// [0,1]


// ========================================
// SOAL 37: Pair Sum
// Hitung berapa banyak pasangan angka dalam array
// yang jumlahnya sama dengan target
// [1,2,3,4,3], target=6 => 2 pasang ((2,4) dan (3,3))
// ========================================

function pairSum(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) count++;
    }
  }

  return count;
}

console.log(pairSum([1, 2, 3, 4, 3], 6));
// 2


// ========================================
// SOAL 38: Frequency Counter
// Hitung frekuensi setiap elemen dalam array
// dan kembalikan dalam bentuk object
// ========================================

function frequencyCounter(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

console.log(frequencyCounter(["a", "b", "a", "c", "b", "a"]));
// { a: 3, b: 2, c: 1 }


// ========================================
// SOAL 39: Sliding Window Max Sum
// Cari nilai maksimum dari penjumlahan
// k elemen yang berurutan (subarray dengan ukuran k)
// [1,4,2,10,2,3,1,0,20], k=4 => 24 (4+2+10+2 atau lainnya... terbesar adalah 10+2+3+1=16, cek manual)
// ========================================

function maxSubArraySum(arr, k) {
  let maxSum = -Infinity;
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - (k - 1)];
    }
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
// 24 (2+3+1+0+20 -> ambil 4 elemen: 3+1+0+20=24)


// ========================================
// SOAL 40: Stack Implementation
// Implementasikan struktur data Stack (LIFO)
// dengan method: push, pop, peek, isEmpty
// ========================================

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // 3
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false


// ========================================
// SOAL 41: Queue Implementation
// Implementasikan struktur data Queue (FIFO)
// dengan method: enqueue, dequeue, peek, isEmpty
// ========================================

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.peek());    // 2
console.log(queue.isEmpty()); // false


// ========================================
// SOAL 42: Linked List Implementation
// Implementasikan struktur data Singly Linked List
// dengan method: append (tambah node di akhir) dan print (tampilkan semua nilai)
// ========================================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();
// 1 -> 2 -> 3