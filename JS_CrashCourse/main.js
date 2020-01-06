// Manipulating the DOM
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