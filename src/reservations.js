import {restaurantName,restaurantPhoneNumber,restaurantEmailAddress,restaurantAddressFirstLine,restaurantAddressSecondLine} from './globals.js';
import {deleteContent} from './general-functions.js';

function loadReservationPage() {

    const contentDOM = document.querySelector('#content');
    // Title: h1
    const reservationsTitle = 'Reservations';

    const reservationsTitleDOM = document.createElement('h1');
    reservationsTitleDOM.textContent = reservationsTitle;
    contentDOM.appendChild(reservationsTitleDOM);

    const form = document.createElement('form');
    const fieldSet = document.createElement('fieldset');
    const formRowDay = document.createElement('div');

    formRowDay.classList.add('form-row');

    const labelDay = document.createElement('label');
    labelDay.setAttribute('for', 'day');
    labelDay.textContent = 'Day:';
    formRowDay.appendChild(labelDay);

    const inputDay = document.createElement('input');
    inputDay.setAttribute('type', 'date');
    inputDay.setAttribute('required','');
    inputDay.setAttribute('id', 'day');
    inputDay.setAttribute('name', 'input_day');

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    inputDay.setAttribute('min', `${today.getFullYear()}-${month}-${today.getDate()}`);

    const latestReservation = new Date(today);
    let latestDay = latestReservation.getDate() + 14;
    latestReservation.setDate(latestDay);
    inputDay.setAttribute('max', `${latestReservation.getFullYear()}-${latestReservation.getMonth()}-${latestReservation.getDate()}`);
    formRowDay.appendChild(inputDay);

    fieldSet.appendChild(formRowDay);

    // Time: 
    const formRowTime = document.createElement('div');
    formRowTime.classList.add('form-row');

    const labelTime = document.createElement('label');
    labelTime.setAttribute('for', 'time');
    labelTime.textContent = 'Time:';
    formRowTime.appendChild(labelTime);

    // const inputTime = document.createElement('input');
    // inputTime.setAttribute('type', 'time');
    // inputTime.setAttribute('id', 'time');
    // inputTime.setAttribute('name', 'input_time');
    // inputTime.setAttribute('max',`22:00`);
    // inputTime.setAttribute('step',900);
    // formRowTime.appendChild(inputTime);
    // fieldSet.appendChild(formRowTime);

    // Try a select instead:
    const select = document.createElement('select');

    // Generate time options in 5-minute intervals
    for (let hour = 11; hour < 21; hour++) {

        if (hour < 12) {
            for (let minute = 0; minute < 60; minute += 5) {
                const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} AM`;
                const option = document.createElement('option');
                option.value = time;
                option.text = time;
                select.appendChild(option);
            }
        } else if (hour < 13) {
            for (let minute = 0; minute < 60; minute += 5) {
                const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} PM`;
                const option = document.createElement('option');
                option.value = time;
                option.text = time;
                select.appendChild(option);

            }
        } else {
            for (let minute = 0; minute < 60; minute += 5) {
                const time = `${String(hour - 12).padStart(2, '0')}:${String(minute).padStart(2, '0')} PM`;
                const option = document.createElement('option');
                option.value = time;
                option.text = time;
                select.appendChild(option);

            }
        }

    }
    formRowTime.appendChild(select);
    fieldSet.appendChild(formRowTime);



    // Name: 
    const formRowName = document.createElement('div');
    formRowName.classList.add('form-row');

    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'name');
    labelName.textContent = 'Name:';
    formRowName.appendChild(labelName);

    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('name', 'input_name');
    inputName.setAttribute('maxlength', 15);
    inputName.setAttribute('minlength', 1);
    formRowName.appendChild(inputName);

    fieldSet.appendChild(formRowName);

    //Party Size: 
    const formRowPartySize = document.createElement('div');
    formRowPartySize.classList.add('form-row');

    const labelPartySize = document.createElement('label');
    labelPartySize.setAttribute('for', 'party');
    labelPartySize.textContent = 'Party Size:';
    formRowPartySize.appendChild(labelPartySize);

    const inputPartySize = document.createElement('input');
    inputPartySize.setAttribute('type', 'text');
    inputPartySize.setAttribute('id', 'party');
    inputPartySize.setAttribute('name', 'input_party');
    inputPartySize.setAttribute('maxlength', 2);
    inputPartySize.setAttribute('minlength', 1);
    const re = /^\d+$/;
    inputPartySize.setAttribute('pattern', re.source);
    formRowPartySize.appendChild(inputPartySize);

    fieldSet.appendChild(formRowPartySize);

    // Submit Button
    const formRowButton = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-reservation-button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('type', 'submit');

    submitButton.addEventListener("click", (event) => {

        event.preventDefault();
        alert("Thank you for your reservation! You will receive confirmation via email within 4 hours.")
        deleteContent();
        loadReservationPage();
    });

    formRowButton.appendChild(submitButton);
    formRowButton.classList.add('form-row');
    fieldSet.appendChild(formRowButton);

    form.appendChild(fieldSet);
    contentDOM.appendChild(form);




};

export { loadReservationPage };