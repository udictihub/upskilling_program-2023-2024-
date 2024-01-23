import getElement from "./getElement.js";
import presentDrinks from "./presentDrinks.js";
import {URL} from "../api.js";

const form = getElement(".search-form");
const input = getElement('[name="drink"]');
form.addEventListener("keyup", function(e){
    e.preventDefault();

    const value = input.value;
    if(!value){
        presentDrinks(`${URL}a`);
    }
    else{
        presentDrinks(`${URL}${value}`);
    }
})