import { restaurantName, restaurantPhoneNumber, restaurantEmailAddress, restaurantAddressFirstLine, restaurantAddressSecondLine } from './globals.js';
import { deleteContent } from './general-functions.js';

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
    labelDay.classList.add('form-label');
    formRowDay.appendChild(labelDay);

    const inputDay = document.createElement('input');
    inputDay.setAttribute('type', 'date');
    inputDay.setAttribute('required', '');
    inputDay.setAttribute('id', 'day');
    inputDay.setAttribute('name', 'input_day');

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    inputDay.setAttribute('min', `${today.getFullYear()}-${month}-${today.getDate()}`);

    const latestReservation = new Date(today);
    latestReservation.setDate(latestReservation.getDate() + 17);
    const latestMonth = String(latestReservation.getMonth()+1).padStart(2, '0');
    const latestDay = String(latestReservation.getDate()).padStart(2,'0');
    inputDay.setAttribute('max', `${latestReservation.getFullYear()}-${latestMonth}-${latestDay}`);
    // inputDay.setAttribute('max','2024-08-31');
    formRowDay.appendChild(inputDay);

    fieldSet.appendChild(formRowDay);

    // Time: 
    const formRowTime = document.createElement('div');
    formRowTime.classList.add('form-row');

    const labelTime = document.createElement('label');
    labelTime.setAttribute('for', 'time');
    labelTime.textContent = 'Time:';
    labelTime.classList.add('form-label');
    formRowTime.appendChild(labelTime);


    // Try a select instead:
    const select = document.createElement('select');


    const optionDefault = document.createElement('option');
    optionDefault.value = '-Choose-Time-';
    optionDefault.text = '-Choose-Time-';
    select.appendChild(optionDefault);
    select.setCustomValidity('Kindly Choose a Time.');
    const regex = /^\d{2}:\d{2} (AM|PM)$/;

    // Generate time options in 5-minute intervals
    for (let hour = 11; hour < 21; hour++) {

        if (hour < 12) {
            for (let minute = 0; minute < 60; minute += 15) {
                const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} AM`;
                const option = document.createElement('option');
                option.value = time;
                option.text = time;
                select.appendChild(option);
            }
        } else if (hour < 13) {
            for (let minute = 0; minute < 60; minute += 15) {
                const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} PM`;
                const option = document.createElement('option');
                option.value = time;
                option.text = time;
                select.appendChild(option);

            }
        } else {
            for (let minute = 0; minute < 60; minute += 15) {
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
    labelName.classList.add('form-label');
    formRowName.appendChild(labelName);

    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('name', 'input_name');
    inputName.setAttribute('maxlength', 15);
    inputName.setAttribute('minlength', 1);
    inputName.setAttribute('required', '');
    formRowName.appendChild(inputName);

    fieldSet.appendChild(formRowName);


    

    //Party Size: 
    const formRowPartySize = document.createElement('div');
    formRowPartySize.classList.add('form-row');

    const labelPartySize = document.createElement('label');
    labelPartySize.setAttribute('for', 'party');
    labelPartySize.textContent = 'Party Size:';
    labelPartySize.classList.add('form-label');
    formRowPartySize.appendChild(labelPartySize);

    const inputPartySize = document.createElement('input');
    inputPartySize.setAttribute('type', 'text');
    inputPartySize.setAttribute('id', 'party');
    inputPartySize.setAttribute('name', 'input_party');
    inputPartySize.setAttribute('maxlength', 2);
    inputPartySize.setAttribute('minlength', 1);
    inputPartySize.setAttribute('required', '');
    const re = /^\d+$/;
    inputPartySize.setAttribute('pattern', re.source);
    formRowPartySize.appendChild(inputPartySize);

    fieldSet.appendChild(formRowPartySize);

    // Email Address: 
    const formRowEmail = document.createElement('div');
    formRowEmail.classList.add('form-row');

    const labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'name');
    labelEmail.textContent = 'Email:';
    labelEmail.classList.add('form-label');
    formRowEmail.appendChild(labelEmail);

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('id', 'email');
    inputEmail.setAttribute('name', 'input_email');
    inputEmail.setAttribute('required', '');
    formRowEmail.appendChild(inputEmail);

    fieldSet.appendChild(formRowEmail);


    // Submit Button
    const formRowButton = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-reservation-button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('type', 'submit');


    formRowButton.appendChild(submitButton);
    formRowButton.classList.add('form-row');
    fieldSet.appendChild(formRowButton);

    form.appendChild(fieldSet);
    contentDOM.appendChild(form);

    function checkTimeValidity(){
        if (regex.test(select.value)){
            select.setCustomValidity('');
        } else {
            select.setCustomValidity('Kindly Choose a Time.');
        }

    }

    select.addEventListener('click',(event)=>{
        checkTimeValidity();
    })

    submitButton.addEventListener('click',(event)=>{
        console.log('Clicked Submit');
    })


    form.addEventListener("submit", (event) => {

        event.preventDefault();

        console.log(submitButton);
        console.log(form);
        

        checkTimeValidity()
        
        console.log(select.validity);

        if (!inputDay.validity.valid){
            inputDay.setCustomValidity('Kindly Choose a Day.');
        }


        if (form.checkValidity()){
            alert("Thank you for your reservation! You will receive confirmation via email within 4 hours.");
            deleteContent();
            loadReservationPage();
        }
        
        

    });

    



};

export { loadReservationPage };