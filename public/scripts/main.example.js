import App from "./app.example.js";
import Binar from "./binar.js";

/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

Binar.listCars()
    .then(cars => {
        console.log("List cars: ", cars);
    })
    .catch(error => {
        console.log("Error: ", error);
    });

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);
