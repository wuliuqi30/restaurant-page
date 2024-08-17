import {restaurantName,restaurantPhoneNumber,restaurantEmailAddress,restaurantAddressFirstLine,restaurantAddressSecondLine} from './globals.js';
function loadContactPage(){

    const contentDOM = document.querySelector('#content');
    // Title: h1
    const contactTitle = 'Contact Us';

    const contactTitleDOM = document.createElement('h1');
    contactTitleDOM.textContent = contactTitle;
    contentDOM.appendChild(contactTitleDOM);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const phone = document.createElement('p');
    phone.textContent = restaurantPhoneNumber;
    contactContainer.appendChild(phone);

    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');

    const addressTop = document.createElement('p');
    addressTop.textContent = restaurantAddressFirstLine;
    addressContainer.appendChild(addressTop);
    const addressBottom = document.createElement('p');
    addressBottom.textContent = restaurantAddressSecondLine;
    addressContainer.appendChild(addressBottom);
    contactContainer.appendChild(addressContainer);
    const email = document.createElement('p');
    email.textContent = restaurantEmailAddress;
    contactContainer.appendChild(email);
    contentDOM.appendChild(contactContainer);
};

export {loadContactPage};