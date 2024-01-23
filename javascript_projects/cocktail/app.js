import presentDrinks from "./src/presentDrinks.js"
import "./src/searchForm.js"
import {URL}from "./api.js"
window.addEventListener("DOMContentLoaded", presentDrinks(`${URL}a`));
