import {restaurantName,restaurantPhoneNumber,restaurantEmailAddress,restaurantAddressFirstLine,restaurantAddressSecondLine} from './globals.js';

function loadMenuPage() {

    const contentDOM = document.querySelector('#content');
    // Title: h1
    const menuTitle = 'Menu';

    const menuTitleDOM = document.createElement('h1');
    menuTitleDOM.textContent = menuTitle;
    contentDOM.appendChild(menuTitleDOM);

    // Section Name
    function appendSectionName(secName) {
        const sectionNameDOM = document.createElement('h2');
        sectionNameDOM.textContent = secName;
        contentDOM.appendChild(sectionNameDOM);
    }

    class MenuItem {
        constructor(itemName = 'Delightful Dish', price = 10, text = 'A scrumptious combination of delicious ingredients put together for your tasting pleasure.') {
            this.name = itemName;
            this.price = price;
            this.text = text;
        };
    };

    // a menu item is an object with .name, .price, and .text fields
    function appendMenuItems(menuItemInputArray) {
        for (let i = 0; i < menuItemInputArray.length; i++) {
            let menuItemInput = menuItemInputArray[i];
            const menuItemContainerDOM = document.createElement('div');
            menuItemContainerDOM.classList.add('menu-item-container');

            const menuItemHeaderDOM = document.createElement('div');
            menuItemHeaderDOM.classList.add('menu-item-container-heading');

            const menuItemNameDOM = document.createElement('p');
            menuItemNameDOM.textContent = menuItemInput.name;
            const menuItemPriceDOM = document.createElement('p');
            menuItemPriceDOM.textContent = menuItemInput.price;

            menuItemHeaderDOM.appendChild(menuItemNameDOM);
            menuItemHeaderDOM.appendChild(menuItemPriceDOM);

            menuItemContainerDOM.appendChild(menuItemHeaderDOM);

            const menuItemTextDOM = document.createElement('p');
            menuItemTextDOM.classList.add('menu-item-text');
            menuItemTextDOM.textContent = menuItemInput.text;
            menuItemContainerDOM.appendChild(menuItemTextDOM);


            contentDOM.appendChild(menuItemContainerDOM);
        }
    };

    // The Menu: 
    appendSectionName('Appetizers');
    let menuItemInputArray = [new MenuItem(), new MenuItem(), new MenuItem(), new MenuItem()];
    appendMenuItems(menuItemInputArray);

    appendSectionName('Drinks');
    let menuItemInputArray2 = [new MenuItem(), new MenuItem()];
    appendMenuItems(menuItemInputArray2);

    appendSectionName('Lunch');
    menuItemInputArray2 = [new MenuItem(), new MenuItem()];
    appendMenuItems(menuItemInputArray2);

    appendSectionName('Dinner');
    menuItemInputArray2 = [new MenuItem(), new MenuItem()];
    appendMenuItems(menuItemInputArray2);

    appendSectionName('Sides');
    menuItemInputArray2 = [new MenuItem(), new MenuItem()];
    appendMenuItems(menuItemInputArray2);


};

export { loadMenuPage };