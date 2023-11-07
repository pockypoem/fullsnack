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

## Run
* `npm run ts`