<h1 align="center" id="title">next-product-management-frontend</h1>

<p align="center" id="description">Building a web app for Product Management System with Multi-User Access. </p>

<br>
<h2>🚀 Requirements</h2>

Here're some of the project's requirments :

Aplikasi di unggah di akun git kamu dan pastikan memiliki akses public.

Kebutuhan:
  1. Bisa melakukan pembuatan akun 
  2. Bisa melakukan login ✔️
  3. Menyimpan data user di database 
  4. Bisa mengakses profile dengan header token JWT, response berbentuk JSON ✔️
  5. Bisa membuat CRUD product dengan REST API + header token JWT dan session pada front-end nya

Aturan:
  1. Silakan menggunakan bahasa pemrograman yang kamu bisa ( Rekomendasi ~~Python~~ / Node JS) 📍 (In Backend) ✔️
  2. Gunakanlah framework atau library yang mempermudah proses pembuatan di lebih di rekomendasikan ~~framework python~~ ( ~~Flask~~ / ~~Sanic~~ atau Expres Js) 📍 (In Backend) ✔️
  3. Untuk User Interface kami merekomendasikan menggunakan framework dari Node JS ( ~~React JS~~ / Next JS dan nilai plus jika menambahkan redux) ✔️
  4. Gunakan database sesuai yang kamu rasa cocok, pilihannya ~~PostgreSQL~~ atau MongoDB 📍 (In Backend) ✔️
  5. Menggunakan JWT (JSON Web Token) untuk autentikasi ✔️
  6. Kamu harus mengirimkan aplikasimu di repositori git public ✔️
  7. Aplikasimu harus bisa dijalankan di local ✔️
  8. Deploy aplikasi di heroku atau vps (nilai tambah) 
  9. Dokumentasi API (nilai tambah) (In Backend) ✔️

<br>
<h2>🧐 Features</h2>

Here're some of the project's best features :

*  Authentication and Authorization :
    * Login User (Admin or Viewer) ✔️
    * Register User
    * Logout User ✔️
    
*  Product Management :
    * Add Product -> Admin Auth
    * Get All Product -> Auth
      * Get All Product with Filter :
          * name
          * price
      * Get All Product with Pagination :
          * page
          * size
          * sort (name.price, createdAd)
          * direction (asc. desc)
    * Edit Product -> Admin Auth
    * Delete Menu -> Admin Auth

<br />
<h2>🖥️ Layout</h2>

Here're project's layout :

[layout](https://www.figma.com/design/h85JTSHU8S6hnfU9K8PYdI/Prodigy?m=auto&t=xwYT3HYHkK45AZa0-6)

<br>
<h2>🛠️ Installation Steps :</h2>

<p>1. Clone Repository</p>

```
git clone https://github.com/mdzakied/next-product-management-frontend.git
```

<br />
<p>2. Prepare backend in [express-product-management-backend](https://github.com/mdzakied/express-product-management-backend.git} </p>

<br />
<p>3. Complete and Adjust configuration in file .env,local</p>

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```

<br />
<p>4. Run Command</p>

```
npm install
```

<br />
<p>5. Run Project for Development</p>

```
npm run dev 
```

<br>
<h2>💻 Built with</h2>

Technologies used in the project :

*   Typescript
*   Next.js
*   axios
*   js-cookie
*   React Redux
*   Tailwind.css
*   Flowbite React
