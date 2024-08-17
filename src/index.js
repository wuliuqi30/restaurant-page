// index.js
// import 'whatwg-fetch'; // or 'node-fetch'
import { a, initializePage } from './content.js';
import { loadMenuPage } from './menu.js';
import { appendFooter } from "./footer.js";
import { loadReservationPage } from "./reservations.js";
import { loadContactPage } from "./contact.js";
import {deleteContent} from './general-functions.js';
import "./styles.css";
import { restaurantName, restaurantPhoneNumber, restaurantEmailAddress, restaurantAddressFirstLine, restaurantAddressSecondLine } from './globals.js';

console.log("rom");
console.log(a);

initializePage();
appendFooter();

// Make event listeners on tabs: 

const homeTabButton = document.getElementById("home-tab");

homeTabButton.lastElementChild.addEventListener("click", (event) => {
    deleteContent();
    initializePage();

    // Reset tab: 
    const tab = document.querySelector('.tab-visible');
    tab.classList.remove('tab-visible');

    homeTabButton.firstElementChild.classList.add('tab-visible');

})

const menuTabButton = document.getElementById("menu-tab");

menuTabButton.lastElementChild.addEventListener("click", (event) => {
    deleteContent();
    loadMenuPage();

    // Reset tab: 
    const tab = document.querySelector('.tab-visible');
    tab.classList.remove('tab-visible');

    menuTabButton.firstElementChild.classList.add('tab-visible');
})


const reservationTabButton = document.getElementById("reservation-tab");

reservationTabButton.lastElementChild.addEventListener("click", (event) => {
    deleteContent();
    loadReservationPage();

    // Reset tab: 
    const tab = document.querySelector('.tab-visible');
    tab.classList.remove('tab-visible');

    reservationTabButton.firstElementChild.classList.add('tab-visible');
});

const contactTabButton = document.getElementById("contact-tab");

contactTabButton.lastElementChild.addEventListener("click", (event) => {
    deleteContent();
    loadContactPage();

    // Reset tab: 
    const tab = document.querySelector('.tab-visible');
    tab.classList.remove('tab-visible');

    contactTabButton.firstElementChild.classList.add('tab-visible');
});

