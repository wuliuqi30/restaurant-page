import {restaurantName,restaurantPhoneNumber,restaurantEmailAddress,restaurantAddressFirstLine,restaurantAddressSecondLine} from './globals.js';

function appendFooter() {
    // Footer section:
    const footerDOM = document.querySelector('.common-footer');


    // Left: Address
    // Center: Name
    // Right: Newsletter Signup

    const addressDOM = document.createElement('div');
    addressDOM.classList.add('address-container');
    footerDOM.appendChild(addressDOM);

    const addressTopDOM = document.createElement('p');
    addressTopDOM.textContent = restaurantAddressFirstLine;
    addressTopDOM.classList.add('address-footer');
    addressDOM.appendChild(addressTopDOM);

    const addressTopBottom = document.createElement('p');
    addressTopBottom.textContent = restaurantAddressSecondLine;
    addressTopBottom.classList.add('address-footer');
    addressDOM.appendChild(addressTopBottom);

    const restaurantNameDOMFooter = document.createElement('h2');
    restaurantNameDOMFooter.classList.add('restaurant-name');
    restaurantNameDOMFooter.textContent = restaurantName;
    footerDOM.appendChild(restaurantNameDOMFooter);

    const phoneDOM = document.createElement('div');
    phoneDOM.classList.add('phone-number');
    phoneDOM.textContent = restaurantPhoneNumber;
    footerDOM.appendChild(phoneDOM);

}

export {appendFooter};