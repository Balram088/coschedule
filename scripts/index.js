import {navbar , footer} from "../componenets/nav.js";
console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let footer_div =document.getElementById("footer");
footer_div.innerHTML = footer();