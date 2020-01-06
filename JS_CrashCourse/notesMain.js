// Manipulating the DOM (this code does not run - !! these are notes from
// the JS Crash Course)
// You can use JS methods to manipulate the DOM:

const items = document.querySelectorAll('.item'); // This takes the html list
items.forEach((item) => console.log(item)); // This prints the items in the console

const ul = document.querySelector('.items'); // Grab ul with class 'items'
// ul.remove();  will remove the list of three items from the webpage
// ul.lastElementChild.remove(); removes the third item from the list
// ul.firstElementChild.textContent = 'Hello';  this changes the first list element
                                              // text to 'Hello'
// Grab second list element using the index and change text:
ul.children[1].innerText = 'Whatever';
// Grab last element and use innerHTML to change text dynamically:
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';


const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    // you can get the attributes of the button when you click on it,
    // for example the name or id:
    console.log(e.target.className); 
});

// You can make the user interface interactive:
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Change background colour of the form when you click on the button:
    document.querySelector('#my-form').style.background = '#ccc';
    // grab the body of the page and give it a dark colour:
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});