# Vanilla JavaScript Data Manipulation Cheat Sheet

> Catatan ringkas Array, Object, dan utility JavaScript yang paling sering digunakan untuk membuat CRUD, Search, Filter, Sorting, Pagination, Dashboard, CMS, ERP, dan aplikasi frontend modern.

---

# Data Contoh

Gunakan satu data yang sama untuk seluruh contoh.

```js
let users = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
  age: 20 + i,
  active: i % 2 === 0
}));
```

---

# 1. Membuat Data

## Array Literal

```js
const users = [];
```

---

## Object Literal

```js
const user = {
  id: 1,
  name: "John"
};
```

---

## Array.from()

Membuat array dengan jumlah tertentu.

```js
Array.from({ length: 5 }, (_, i) => i + 1);
```

Hasil:

```js
[1, 2, 3, 4, 5]
```

Contoh data dummy:

```js
Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`
}));
```

---

# 2. Menambah Data

## push()

Tambah data di akhir.

```js
users.push({
  id: 100,
  name: "John"
});
```

---

## unshift()

Tambah data di awal.

```js
users.unshift({
  id: 100,
  name: "John"
});
```

Biasanya dipakai agar data terbaru muncul paling atas.

---

# 3. Menghapus Data

## pop()

Hapus item terakhir.

```js
users.pop();
```

---

## shift()

Hapus item pertama.

```js
users.shift();
```

---

## splice()

Menghapus atau mengganti item tertentu.

Hapus:

```js
users.splice(index, 1);
```

Ganti:

```js
users.splice(index, 1, newUser);
```

Contoh delete user:

```js
const userIndex =
  users.findIndex(
    user => user.id === id
  );

users.splice(userIndex, 1);
```

---

# 4. Mengambil Data

## at()

Mengambil item berdasarkan index.

```js
users.at(0);
```

Item terakhir:

```js
users.at(-1);
```

---

## slice()

Mengambil sebagian data.

```js
users.slice(0, 10);
```

Tidak mengubah array asli.

---

# 5. Looping Data

## forEach()

Loop data.

```js
users.forEach(user => {
  console.log(user.name);
});
```

Biasanya digunakan untuk:

```text
Logging
Manipulasi DOM
Validasi
```

---

## map()

Mengubah bentuk data.

```js
users.map(user => user.name);
```

Hasil:

```js
[
  "User 1",
  "User 2"
]
```

---

Contoh render table:

```js
users.map(user => `
<tr>
  <td>${user.name}</td>
</tr>
`);
```

---

# 6. Mencari Data

## find()

Mengambil satu data pertama yang cocok.

```js
const user =
  users.find(
    user => user.id === 5
  );
```

Digunakan untuk:

```text
Edit User
Detail User
Profile User
```

---

## findIndex()

Mengambil posisi data.

```js
const userIndex =
  users.findIndex(
    user => user.id === 5
  );
```

Digunakan untuk:

```text
Edit
Delete
Replace
```

---

# 7. Filter Data

## filter()

Menyaring data.

```js
users.filter(
  user => user.active
);
```

---

Filter user aktif:

```js
const activeUsers =
  users.filter(
    user => user.active
  );
```

---

Filter berdasarkan nama:

```js
users.filter(user =>
  user.name
    .toLowerCase()
    .includes(search)
);
```

Digunakan untuk:

```text
Search
Filter Status
Filter Category
```

---

# 8. Search String

## includes()

Mengecek apakah string mengandung teks tertentu.

```js
user.name.includes("john");
```

Biasanya digabung dengan:

```js
toLowerCase()
```

Contoh:

```js
user.name
  .toLowerCase()
  .includes(keyword);
```

---

# 9. Sorting Data

## sort()

Mengurutkan data.

---

Angka ASC

```js
numbers.sort(
  (a, b) => a - b
);
```

---

Angka DESC

```js
numbers.sort(
  (a, b) => b - a
);
```

---

String ASC

```js
users.sort((a, b) =>
  a.name.localeCompare(
    b.name
  )
);
```

---

String DESC

```js
users.sort((a, b) =>
  b.name.localeCompare(
    a.name
  )
);
```

---

Sorting dinamis

```js
users.sort((a, b) => {
  const compare =
    a[sortField]
      .localeCompare(
        b[sortField]
      );

  return sortOrder === "asc"
    ? compare
    : -compare;
});
```

Digunakan untuk:

```text
Sort Name
Sort Email
Sort Category
```

---

# 10. Validasi Data

## some()

Minimal satu data cocok.

```js
users.some(
  user => user.active
);
```

Contoh:

```text
Apakah ada user aktif?
```

---

## every()

Semua data harus cocok.

```js
users.every(
  user => user.active
);
```

Contoh:

```text
Apakah semua user aktif?
```

---

# 11. Menghitung Data

## reduce()

Mengubah banyak data menjadi satu nilai.

---

Total umur:

```js
users.reduce(
  (total, user) =>
    total + user.age,
  0
);
```

---

Total harga:

```js
cart.reduce(
  (total, item) =>
    total + item.price,
  0
);
```

---

Jumlah user aktif:

```js
users.reduce(
  (count, user) =>
    user.active
      ? count + 1
      : count,
  0
);
```

---

# 12. Object Utility

## Object.keys()

Mengambil semua key.

```js
Object.keys(user);
```

Hasil:

```js
[
  "id",
  "name",
  "email"
]
```

---

## Object.values()

Mengambil semua value.

```js
Object.values(user);
```

---

## Object.entries()

Mengambil key dan value.

```js
Object.entries(user);
```

---

# 13. Destructuring

Mengambil property object.

```js
const {
  id,
  name,
  email
} = user;
```

---

Array:

```js
const [
  firstUser
] = users;
```

---

# 14. Spread Operator (...)

Copy array.

```js
const newUsers = [
  ...users
];
```

---

Copy object.

```js
const newUser = {
  ...user
};
```

---

Update object.

```js
const updatedUser = {
  ...user,
  active: true
};
```

---

Merge object.

```js
const result = {
  ...user,
  ...profile
};
```

---

# 15. Number Utility

## Number()

Mengubah string menjadi number.

```js
Number("5");
```

---

Contoh dataset:

```js
const id =
  Number(
    e.target.dataset.id
  );
```

---

Contoh pagination:

```js
const page =
  Number(
    e.target.dataset.page
  );
```

---

# 16. Math Utility

## Math.ceil()

Membulatkan ke atas.

---

Total halaman:

```js
Math.ceil(
  users.length / 10
);
```

Contoh:

```js
Math.ceil(
  51 / 10
);
```

Hasil:

```js
6
```

---

## Math.random()

Membuat angka acak.

```js
Math.random();
```

---

Contoh ID sederhana:

```js
Math.floor(
  Math.random() * 100000
);
```

---

# 17. Pagination Logic

Item per halaman:

```js
const perPage = 10;
```

---

Posisi awal:

```js
const start =
  (page - 1) * perPage;
```

---

Posisi akhir:

```js
const end =
  start + perPage;
```

---

Data halaman:

```js
users.slice(
  start,
  end
);
```

---

Total halaman:

```js
Math.ceil(
  users.length / perPage
);
```

---

# 18. CRUD Flow Yang Paling Umum

## Create

```js
users.unshift({
  id: Date.now(),
  name,
  email
});
```

---

## Read

```js
users.find(
  user => user.id === id
);
```

---

## Update

```js
const userIndex =
  users.findIndex(
    user => user.id === id
  );

users.splice(
  userIndex,
  1,
  {
    ...users[userIndex],
    name: "Updated"
  }
);
```

---

## Delete

```js
const userIndex =
  users.findIndex(
    user => user.id === id
  );

users.splice(
  userIndex,
  1
);
```

---

# Ringkasan Yang Paling Sering Dipakai

```text
Create
├─ push
├─ unshift

Read
├─ find

Update
├─ findIndex
├─ splice
├─ spread

Delete
├─ findIndex
├─ splice

Search
├─ filter
├─ includes
├─ toLowerCase

Sort
├─ sort
├─ localeCompare

Pagination
├─ slice
├─ Math.ceil

Validation
├─ some
├─ every

Statistics
├─ reduce

Utilities
├─ Array.from
├─ Number
├─ Math.random
```

# Yang Paling Sering Dipakai di Dashboard Admin

```js
Array.from()
filter()
find()
findIndex()
sort()
slice()
splice()
map()
unshift()
includes()
localeCompare()
Math.ceil()
Number()
```

Jika menguasai method-method di atas, kamu sudah mencakup sebagian besar manipulasi data yang digunakan pada CRUD, table management, search, filtering, sorting, dan pagination di aplikasi frontend modern.
