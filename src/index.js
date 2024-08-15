// index.js
import 'whatwg-fetch'; // or 'node-fetch'
import {a, initializePage} from './content.js';
import {displayMenu} from './menu.js';
import {appendFooter} from "./footer.js";
import "./styles.css";

console.log("rom");
console.log(a);

initializePage();
appendFooter();

function deleteContent() {
    const contentDOM = document.getElementById("content")
    let child = contentDOM.lastElementChild;
    while (child) {
        contentDOM.removeChild(child);
        child = contentDOM.lastElementChild;
    }
}
// Make event listeners on tabs: 

const homeTabButton = document.getElementById("home-tab");

homeTabButton.addEventListener("click",(event)=> {
    deleteContent();
    initializePage();
})

const menuTabButton = document.getElementById("menu-tab");

menuTabButton.addEventListener("click",(event)=> {
    deleteContent();
    displayMenu();
})