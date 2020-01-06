/* The tutorial explains how to create a very basic app where you can add
 a user, grab the values, and then as output add the user to the user list.
 The <ul> items in the .html file are commented out for this.
*/

// Grab elements from the DOM and add these to variables:
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); // This uses the CSS for the error class
        msg.innerHTML = 'Please fill in all fields'; // This gives an alert
        setTimeout(() => msg.remove(), 3000); // This removes the alert after 3 seconds
    } else {
    // If name and email have been entered, it must be added as item to the <ul>
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields:
        nameInput.value = '';
        emailInput.value = '';
    }
}