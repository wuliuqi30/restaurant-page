// Create the homepage content stuff:
import dalImage from "./pics/dal.jpg";
import {restaurantName,restaurantPhoneNumber,restaurantEmailAddress,restaurantAddressFirstLine,restaurantAddressSecondLine} from './globals.js';
console.log("Top Level Console.log from the exporting file");
const a = 12;

function initializePage() {
    console.log("Running Initialize Page Function")
    const bodyDOM = document.querySelector('body');
    const contentDOM = document.querySelector('#content');
   


    const restaurantNameDOM = document.createElement('h1');
    restaurantNameDOM.textContent = restaurantName;
    contentDOM.appendChild(restaurantNameDOM);


    const image = document.createElement("img");
    image.src = dalImage;
    contentDOM.appendChild(image);
       


    // 
    const descrip = `One of the most famous vegetarian restaurants in the world, 
    Nirvana invites you to delight in a wide array of delectable curries, delicious 
    soups, fantastic flatbreads, and scrumptious salads from India and around the 
    world. A fully equipped bar and restaurant, Nirvana offers you a unique dining
    experience you won't forget.`;

    const descripNameDOM = document.createElement('p');
    descripNameDOM.classList.add('restaurant-descrip');
    descripNameDOM.textContent = descrip;
    contentDOM.appendChild(descripNameDOM);

    // About section: 
    const about = `The dreamchild of childhood friends Hersh Sangani and Brett Keegan,
    Nirvana was born in 2024 as way to bring vegetarian cuisine to a higher level. `;
    const aboutTitle = 'About';
    const aboutTitleDOM = document.createElement('h2');
    aboutTitleDOM.textContent = aboutTitle;
    contentDOM.appendChild(aboutTitleDOM);

    const aboutDescripDOM = document.createElement('p');
    aboutDescripDOM.textContent = about;
    contentDOM.appendChild(aboutDescripDOM);
}
export { a, initializePage };