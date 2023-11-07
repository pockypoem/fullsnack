## Guide

* `npm init`
* `npm install typescript nodemon -D`
* Buat konfigurasi untuk TS: `./node_modules/.bin/tsc --init`
* `npm i express@4.17.1`
* `npm i @types/express@4.17.2 -D`
* `npm i body-parser@1.19.0`
* Morgan berfungsi untuk melihat url yang sedang dikonsumsi oleh customer `npm i morgan@1.9.1 -D`
* `npm i @types/morgan@1.9.1 -D`

### Library lain
* Untuk memperkecil ukuran response: compression
    * `npm i compression@1.7.4`
    * `npm i @types/compression@1.7.4 -D`
* CORS Origin 
    * `npm i cors@2.8.5`
    * `npm i @types/cors@2.8.5 -D`
* Helmet: untuk melindungi Header dari client dan di sisi server
    * `npm i helmet@3.21.2`
    * `npm i @types/helmet@0.0.45 -D`


## ENV
Untuk menyimpan credential dari environment kita. Misal punya database, maka username dan password bisa ditaruh di .env

* `npm i dotenv@8.2.0`
* PORT = 3306 -> mySQL


## Sequelize
* `npm i sequelize@5.5.1`
* Untuk konfigurasi library: `npm i sequelize-cli@5.5.1` 
* Install driver untuk mysql: `npm i mysql2` 
* Buat file: .sequelizerc
* Untuk setup awal database: `./node_modules/.bin/sequelize-cli init`

Untuk memakai sequelize perlu membuat migrations lalu model dan membuat file untuk konfigurasi database. [Dokumentasi Migrations Sequelize](https://sequelize.org/v5/manual/migrations). <br>

`The .sequelizerc File` untuk memudahkan kita dalam mengatur path atau letak dari folder konfigurasi databas kita. <br>

Mari membuat migrations: `./node_modules/.bin/sequelize-cli model:generate --name user --attributes username:string,password:string --underscored` <br>

File `models/index.js` tidak usah dipusingkan karena itu mengumpulkan semua file-file model jadi satu index.js jadi ketika memanggil model-model hanya melalui satu file saja. <br>

Setelah itu buat database nya. Kemudian jalankan migrations nya: `./node_modules/.bin/sequelize-cli db:migrate` maka akan muncul pada database kita: 
* tabel sequelizemeta
* tabel users

Ingat, Sequelize itu bersifat **asynchronous**. Karena asynchronous maka return nya berupa Promise dengan generic Response.

## Encrypt Password
* `npm i bcrypt`
* `npm i @types/bcrypt -D`
* `npm i @types/validator`

## Validate User Register
* `npm i express-validator@6.3.1`

## Skenario Autentikasi
Ada 2 cara untuk skenario autentikasi:
* Token based authentication
    * Autentikasi berdasarkan token dari client 
    * Setiap request dari client, token akan disertakan di header. Pada server tinggal validasi token tersebut
    * Jika menggunakan token based maka server tidak perlu menyimpan apapun
    * Contoh menggunakan JWT
    * `npm i jsonwebtoken@8.5.1`
    * `npm i @types/jsonwebtoken -D`
    * Perlu key untuk konfigurasi di JWT, perlu nambahin di .env `JWT_SECRET_KEY=kunci`
* Session based authentication
    * Session disimpan di server
    * Ketika user login, nanti id nya akan disimpan di session. Jadi untuk request berikutnya, dia tidak perlu seperti token karena semuanya sudah diurus oleh server
    * Sisi negative menggunakan session adalah ketika user banyak yang akses maka performa dari server berkurang 


## Run
Run in 2 terminals:
* `npm run ts`
* `npm run dev`