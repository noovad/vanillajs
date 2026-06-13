# Vanilla JavaScript DOM Cheat Sheet

> Catatan ringkas API DOM, Event, dan Browser API yang paling sering digunakan dalam pengembangan frontend modern.

---

# 1. Document API

Digunakan untuk mencari elemen HTML.

## getElementById()

Mencari elemen berdasarkan id.

```js
document.getElementById("app");
```

HTML:

```html
<div id="app"></div>
```

---

## getElementsByClassName()

Mencari elemen berdasarkan class.

```js
document.getElementsByClassName("card");
```

HTML:

```html
<div class="card"></div>
```

---

## getElementsByTagName()

Mencari berdasarkan tag.

```js
document.getElementsByTagName("button");
```

---

## querySelector()

Mengambil elemen pertama yang cocok.

```js
document.querySelector(".btn");
```

```js
document.querySelector("#app");
```

```js
document.querySelector("[data-id]");
```

---

## querySelectorAll()

Mengambil banyak elemen.

```js
document.querySelectorAll(".btn");
```

---

# 2. Element API

Digunakan untuk membaca atau mengubah elemen.

---

## textContent

Mengambil atau mengubah teks.

```js
title.textContent = "Dashboard";
```

```js
console.log(title.textContent);
```

---

## innerHTML

Mengambil atau mengubah HTML.

```js
container.innerHTML =
  "<h1>Hello</h1>";
```

---

## value

Digunakan pada input.

```js
input.value
```

```js
input.value = "";
```

---

## checked

Digunakan pada checkbox.

```js
checkbox.checked
```

---

## disabled

Aktif/nonaktif elemen.

```js
button.disabled = true;
```

---

## focus()

Memberikan fokus.

```js
input.focus();
```

---

## blur()

Menghilangkan fokus.

```js
input.blur();
```

---

# 3. Class Manipulation

Mengelola class CSS.

---

## add()

Tambah class.

```js
element.classList.add("hidden");
```

---

## remove()

Hapus class.

```js
element.classList.remove("hidden");
```

---

## toggle()

Tambah jika belum ada, hapus jika sudah ada.

```js
element.classList.toggle("hidden");
```

Contoh modal:

```js
modal.classList.toggle("hidden");
```

---

## contains()

Cek apakah class ada.

```js
element.classList.contains("active");
```

---

# 4. Attribute API

Mengelola atribut HTML.

---

## getAttribute()

Ambil atribut.

```js
link.getAttribute("href");
```

---

## setAttribute()

Set atribut.

```js
button.setAttribute(
  "disabled",
  true
);
```

---

## removeAttribute()

Hapus atribut.

```js
button.removeAttribute(
  "disabled"
);
```

---

# 5. Dataset

Mengakses atribut data-*.

HTML:

```html
<button data-id="5">
  Edit
</button>
```

JS:

```js
button.dataset.id;
```

Hasil:

```js
"5"
```

Sangat sering digunakan untuk:

```text
Edit Button
Delete Button
Pagination Button
Tabs
Dropdown
```

---

# 6. DOM Manipulation

Membuat dan mengubah elemen.

---

## createElement()

Membuat elemen baru.

```js
const div =
  document.createElement("div");
```

---

## append()

Tambah elemen.

```js
container.append(div);
```

---

## appendChild()

Tambah child.

```js
container.appendChild(div);
```

---

## prepend()

Tambah di awal.

```js
container.prepend(div);
```

---

## remove()

Menghapus elemen.

```js
element.remove();
```

---

## removeChild()

Menghapus child tertentu.

```js
container.removeChild(div);
```

---

## replaceWith()

Mengganti elemen.

```js
oldCard.replaceWith(newCard);
```

---

## cloneNode()

Menyalin elemen.

```js
card.cloneNode(true);
```

---

# 7. DOM Traversing

Navigasi antar elemen.

---

## parentElement

Parent elemen.

```js
element.parentElement
```

---

## children

Semua child.

```js
element.children
```

---

## firstElementChild

Child pertama.

```js
element.firstElementChild
```

---

## lastElementChild

Child terakhir.

```js
element.lastElementChild
```

---

## nextElementSibling

Elemen setelahnya.

```js
element.nextElementSibling
```

---

## previousElementSibling

Elemen sebelumnya.

```js
element.previousElementSibling
```

---

## closest()

Cari parent terdekat.

```js
element.closest(".card");
```

Sangat sering digunakan pada:

```text
Event Delegation
Modal
Table Action
```

---

# 8. Event Listener

Menangani interaksi pengguna.

---

## addEventListener()

Menambahkan event.

```js
button.addEventListener(
  "click",
  handleClick
);
```

---

## removeEventListener()

Menghapus event.

```js
button.removeEventListener(
  "click",
  handleClick
);
```

---

# 9. Event Yang Paling Sering Digunakan

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

## Input

```text
input
change
focus
blur
```

---

## Form

```text
submit
```

---

## Keyboard

```text
keydown
keyup
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

Informasi event yang sedang terjadi.

---

## e.target

Elemen yang diklik.

```js
e.target
```

---

## e.currentTarget

Elemen yang memasang listener.

```js
e.currentTarget
```

---

## e.key

Tombol keyboard.

```js
e.key
```

Contoh:

```js
if (e.key === "Enter") {
}
```

---

## preventDefault()

Mencegah aksi default browser.

```js
e.preventDefault();
```

Contoh:

```text
Form Submit
Link Navigation
```

---

## stopPropagation()

Menghentikan bubbling.

```js
e.stopPropagation();
```

---

# 11. Event Delegation

Satu listener untuk banyak elemen.

HTML:

```html
<tbody id="users"></tbody>
```

JS:

```js
tbody.addEventListener(
  "click",
  (e) => {

  }
);
```

Cari tombol:

```js
const btn =
  e.target.closest(
    "[data-action]"
  );
```

Ambil data:

```js
btn.dataset.id
```

Digunakan pada:

```text
Table Action
Menu
Dropdown
Tabs
```

---

# 12. Local Storage

Menyimpan data permanen.

---

## Simpan

```js
localStorage.setItem(
  "theme",
  "dark"
);
```

---

## Ambil

```js
localStorage.getItem(
  "theme"
);
```

---

## Hapus

```js
localStorage.removeItem(
  "theme"
);
```

---

## Bersihkan

```js
localStorage.clear();
```

---

# 13. Session Storage

Data hilang ketika tab ditutup.

```js
sessionStorage.setItem();
```

```js
sessionStorage.getItem();
```

---

# 14. Timer API

---

## setTimeout()

Jalankan sekali.

```js
setTimeout(() => {

}, 1000);
```

---

## clearTimeout()

Batalkan timeout.

```js
clearTimeout(timeoutId);
```

---

## setInterval()

Jalankan berulang.

```js
setInterval(() => {

}, 1000);
```

---

## clearInterval()

Hentikan interval.

```js
clearInterval(intervalId);
```

---

# 15. URL API

Mengelola query parameter.

---

## URLSearchParams

```js
const params =
  new URLSearchParams(
    location.search
  );
```

---

## get()

Ambil parameter.

```js
params.get("page");
```

Contoh:

```text
?page=2
```

---

## set()

Set parameter.

```js
params.set("page", 3);
```

---

# 16. Clipboard API

Copy ke clipboard.

```js
navigator.clipboard.writeText(
  "Hello World"
);
```

Digunakan untuk:

```text
Copy Coupon
Copy URL
Copy API Key
```

---

# 17. IntersectionObserver

Mendeteksi elemen masuk viewport.

```js
const observer =
  new IntersectionObserver(
    callback
  );
```

---

## observe()

Mulai mengamati.

```js
observer.observe(
  target
);
```

---

## unobserve()

Berhenti mengamati satu elemen.

```js
observer.unobserve(
  target
);
```

---

## disconnect()

Hentikan semua observer.

```js
observer.disconnect();
```

Digunakan untuk:

```text
Infinite Scroll
Lazy Load
Scroll Animation
```

---

# 18. History API

Mengubah URL tanpa reload.

---

## pushState()

Tambah history baru.

```js
history.pushState(
  {},
  "",
  "?page=2"
);
```

---

## replaceState()

Ganti URL sekarang.

```js
history.replaceState(
  {},
  "",
  "?page=2"
);
```

---

## back()

Kembali.

```js
history.back();
```

---

## forward()

Maju.

```js
history.forward();
```

---

# 19. Async DOM

Digunakan saat mengambil data dari server.

---

## async

```js
async function loadUsers() {

}
```

---

## await

```js
await fetch("/users");
```

---

## try/catch

```js
try {

} catch (error) {

}
```

---

# 20. Fetch API

Request ke server.

---

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

## response.json()

Mengubah response menjadi object.

```js
const data =
  await response.json();
```

---

# Ringkasan Yang Paling Sering Dipakai

```text
Document
├─ querySelector
├─ querySelectorAll
├─ getElementById

Element
├─ textContent
├─ value
├─ classList
├─ dataset
├─ appendChild
├─ remove
├─ closest

Events
├─ addEventListener
├─ click
├─ input
├─ change
├─ submit
├─ keydown
├─ preventDefault
├─ stopPropagation

Storage
├─ localStorage
├─ sessionStorage

Browser APIs
├─ setTimeout
├─ setInterval
├─ URLSearchParams
├─ Clipboard API
├─ IntersectionObserver
├─ History API

Network
├─ fetch
├─ async
├─ await
├─ try/catch
```
