# Vanilla JavaScript Frontend Cheat Sheet

> Catatan ringkas API, method, dan konsep yang paling sering digunakan dalam pengembangan frontend modern menggunakan Vanilla JavaScript.

---

# 1. Array

Digunakan untuk menyimpan banyak data.

```js
const users = ["John", "Sarah"];
```

## Menambah Data

| Method      | Fungsi               |
| ----------- | -------------------- |
| `push()`    | Tambah data di akhir |
| `unshift()` | Tambah data di awal  |

```js
users.push("Alex");
users.unshift("Admin");
```

---

## Menghapus Data

| Method     | Fungsi                               |
| ---------- | ------------------------------------ |
| `pop()`    | Hapus data terakhir                  |
| `shift()`  | Hapus data pertama                   |
| `splice()` | Hapus/tambah data di posisi tertentu |

```js
users.pop();
users.shift();
users.splice(1, 1);
```

---

## Mengambil Data

| Method    | Fungsi                       |
| --------- | ---------------------------- |
| `slice()` | Ambil sebagian data          |
| `at()`    | Ambil item berdasarkan index |

```js
users.slice(0, 3);
users.at(-1);
```

---

## Iterasi Data

### forEach()

Loop data.

```js
users.forEach(user => {
    console.log(user);
});
```

### map()

Mengubah setiap item menjadi bentuk baru.

```js
users.map(user => user.name);
```

### filter()

Menyaring data.

```js
users.filter(user => user.active);
```

### find()

Mengambil satu data pertama yang cocok.

```js
users.find(user => user.id === 1);
```

### findIndex()

Mengambil posisi data.

```js
users.findIndex(user => user.id === 1);
```

### some()

Minimal satu data cocok.

```js
users.some(user => user.admin);
```

### every()

Semua data harus cocok.

```js
users.every(user => user.active);
```

### reduce()

Mengubah array menjadi satu nilai.

```js
cart.reduce(
    (total, item) => total + item.price,
    0
);
```

---

## Pencarian Data

### includes()

Apakah nilai ada?

```js
users.includes("John");
```

### indexOf()

Posisi nilai.

```js
users.indexOf("John");
```

---

## Sorting

### sort()

Urutkan data.

Ascending:

```js
numbers.sort((a, b) => a - b);
```

Descending:

```js
numbers.sort((a, b) => b - a);
```

### reverse()

Balik urutan data.

```js
users.reverse();
```

---

# 2. Object

Digunakan untuk menyimpan data berbentuk key-value.

```js
const user = {
    name: "John",
    age: 25
};
```

## Akses Data

```js
user.name;

user["name"];
```

---

## Object Methods

### Object.keys()

Ambil semua key.

```js
Object.keys(user);
```

### Object.values()

Ambil semua value.

```js
Object.values(user);
```

### Object.entries()

Ambil key dan value.

```js
Object.entries(user);
```

---

# 3. Modern JavaScript

## Destructuring

### Object

```js
const { name, age } = user;
```

### Array

```js
const [firstUser] = users;
```

---

## Spread Operator (...)

Copy array:

```js
const newUsers = [...users];
```

Copy object:

```js
const newUser = {
    ...user
};
```

Merge:

```js
const updatedUser = {
    ...user,
    active: true
};
```

---

## Template Literal

Membuat string dinamis.

```js
`Hello ${user.name}`
```

---

# 4. Document API

Digunakan untuk mencari elemen HTML.

## Berdasarkan ID

```js
document.getElementById("menu");
```

---

## Berdasarkan Class

```js
document.getElementsByClassName("item");
```

---

## Berdasarkan Tag

```js
document.getElementsByTagName("button");
```

---

## Berdasarkan CSS Selector

### Satu Elemen

```js
document.querySelector(".btn");
```

### Banyak Elemen

```js
document.querySelectorAll(".btn");
```

---

# 5. Element API

Digunakan untuk mengubah elemen HTML.

## Text

```js
element.textContent
```

Mengubah teks.

```js
title.textContent = "Dashboard";
```

---

## HTML

```js
element.innerHTML
```

Mengubah isi HTML.

```js
list.innerHTML = "<li>Item</li>";
```

---

## Class

Tambah class:

```js
element.classList.add("hidden");
```

Hapus class:

```js
element.classList.remove("hidden");
```

Toggle class:

```js
element.classList.toggle("hidden");
```

Cek class:

```js
element.classList.contains("hidden");
```

---

## Attribute

Ambil attribute:

```js
element.getAttribute("href");
```

Set attribute:

```js
element.setAttribute("disabled", true);
```

Hapus attribute:

```js
element.removeAttribute("disabled");
```

---

## Dataset

Mengakses atribut `data-*`.

HTML:

```html
<button data-id="10">
```

JS:

```js
button.dataset.id;
```

---

# 6. DOM Manipulation

## Membuat Elemen

```js
document.createElement("div");
```

---

## Menambah Elemen

```js
append();
appendChild();
prepend();
```

Contoh:

```js
container.appendChild(div);
```

---

## Menghapus Elemen

```js
remove();
removeChild();
```

---

## Mengganti Elemen

```js
replaceWith();
```

---

## Clone Elemen

```js
cloneNode();
```

---

# 7. DOM Traversing

Navigasi antar elemen.

## Parent

```js
element.parentElement;
```

---

## Children

```js
element.children;
```

---

## Child Pertama

```js
element.firstElementChild;
```

---

## Child Terakhir

```js
element.lastElementChild;
```

---

## Sibling Berikutnya

```js
element.nextElementSibling;
```

---

## Sibling Sebelumnya

```js
element.previousElementSibling;
```

---

## Cari Parent Tertentu

```js
element.closest(".card");
```

---

# 8. Event Listener

## Menambahkan Event

```js
element.addEventListener(
    "click",
    handler
);
```

---

## Menghapus Event

```js
element.removeEventListener(
    "click",
    handler
);
```

---

# 9. Event Yang Sering Digunakan

## Mouse

```text
click
dblclick
mousedown
mouseup
mouseenter
mouseleave
mousemove
```

---

## Keyboard

```text
keydown
keyup
```

---

## Form

```text
input
change
submit
focus
blur
```

---

## Browser

```text
load
resize
scroll
```

---

# 10. Event Object

## Target Yang Diklik

```js
e.target
```

---

## Element Listener

```js
e.currentTarget
```

---

## Tombol Keyboard

```js
e.key
```

---

## Mencegah Default Browser

```js
e.preventDefault();
```

Contoh:

* Form submit
* Link navigation

---

## Menghentikan Bubbling

```js
e.stopPropagation();
```

---

# 11. Browser APIs

## Local Storage

Simpan data permanen.

Simpan:

```js
localStorage.setItem(
    "theme",
    "dark"
);
```

Ambil:

```js
localStorage.getItem(
    "theme"
);
```

Hapus:

```js
localStorage.removeItem(
    "theme"
);
```

Bersihkan:

```js
localStorage.clear();
```

---

## Session Storage

Data hilang saat tab ditutup.

```js
sessionStorage.setItem();
sessionStorage.getItem();
```

---

# 12. Timers

## Jalankan Sekali

```js
setTimeout(
    callback,
    1000
);
```

---

## Batalkan Timeout

```js
clearTimeout(id);
```

---

## Jalankan Berulang

```js
setInterval(
    callback,
    1000
);
```

---

## Hentikan Interval

```js
clearInterval(id);
```

---

# 13. URL API

Membaca query parameter.

```js
const params =
    new URLSearchParams(
        location.search
    );
```

Ambil parameter:

```js
params.get("page");
```

Set parameter:

```js
params.set("page", 2);
```

---

# 14. Clipboard API

Copy teks ke clipboard.

```js
navigator.clipboard.writeText(
    "Hello"
);
```

---

# 15. IntersectionObserver

Mendeteksi elemen terlihat di viewport.

Digunakan untuk:

* Infinite Scroll
* Lazy Load Image
* Scroll Animation

```js
const observer =
    new IntersectionObserver();
```

Method:

```js
observe()
unobserve()
disconnect()
```

---

# 16. History API

Tambah URL baru:

```js
history.pushState();
```

---

Ganti URL sekarang:

```js
history.replaceState();
```

---

Navigasi browser:

```js
history.back();

history.forward();
```

---

# 17. Async JavaScript

Digunakan untuk operasi yang membutuhkan waktu.

---

## Promise

Representasi proses yang belum selesai.

```js
new Promise();
```

---

## Async Function

```js
async function loadUsers() {}
```

---

## Await

Menunggu proses selesai.

```js
await fetch("/users");
```

---

## Try Catch

Menangani error.

```js
try {

} catch(error) {

}
```

---

# 18. Fetch API

Request ke server.

## GET

```js
fetch("/users");
```

---

## POST

```js
fetch("/users", {
    method: "POST"
});
```

---

## PUT

```js
fetch("/users/1", {
    method: "PUT"
});
```

---

## DELETE

```js
fetch("/users/1", {
    method: "DELETE"
});
```

---

## Response

JSON:

```js
response.json();
```

Text:

```js
response.text();
```

File:

```js
response.blob();
```

---

# 19. Promise Utilities

## Jalankan Bersamaan

```js
Promise.all([
    users(),
    posts()
]);
```

---

## Ambil Yang Pertama Selesai

```js
Promise.race();
```

---

## Tunggu Semua Selesai

```js
Promise.allSettled();
```

---

# Ringkasan Yang Paling Sering Dipakai

```text
Array
├─ push
├─ splice
├─ map
├─ filter
├─ find
├─ some
├─ every
├─ sort

Document
├─ getElementById
├─ querySelector
├─ querySelectorAll

Element
├─ textContent
├─ innerHTML
├─ classList
├─ dataset
├─ appendChild
├─ remove
├─ closest

Events
├─ addEventListener
├─ click
├─ input
├─ submit
├─ preventDefault

Browser API
├─ localStorage
├─ setTimeout
├─ URLSearchParams
├─ IntersectionObserver
├─ History API

Async
├─ fetch
├─ Promise
├─ async
├─ await
├─ try/catch
├─ Promise.all
```
