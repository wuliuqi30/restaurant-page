import {restaurantName} from './globals.js';

function appendFooter() {
    // Footer section:
    const footerDOM = document.querySelector('.common-footer');


    // Left: Address
    // Center: Name
    // Right: Newsletter Signup

    
    const addressTop = '4444 Eightfold Way';
    const addressBottom = 'Mahabodhi, NY 00108';

    const addressDOM = document.createElement('div');
    footerDOM.appendChild(addressDOM);

    const addressTopDOM = document.createElement('p');
    addressTopDOM.textContent = addressTop;
    addressTopDOM.classList.add('address-footer');
    addressDOM.appendChild(addressTopDOM);

    const addressTopBottom = document.createElement('p');
    addressTopBottom.textContent = addressBottom;
    addressTopBottom.classList.add('address-footer');
    addressDOM.appendChild(addressTopBottom);

    const restaurantNameDOMFooter = document.createElement('h2');
    restaurantNameDOMFooter.classList.add('restaurant-name');
    restaurantNameDOMFooter.textContent = restaurantName;
    footerDOM.appendChild(restaurantNameDOMFooter);

    const newsletterSignupDOM = document.createElement('div');
    newsletterSignupDOM.classList.add('newsletter-signup-box');
    newsletterSignupDOM.textContent = "newsletter placeholder";
    footerDOM.appendChild(newsletterSignupDOM);

}

export {appendFooter};