// track user's information: id, full name, which books user has
// keep book info: title, author, category, ISBN

const user1 = {
    name: "Nick",
    id: 125125,
    borrowed: []
};
const user2 = {
    name: "Sarah",
    id: 123123,
    borrowed: []
};

const book1 = {
    title: "This title",
    author: "This author",
    isbn: "12345",
    category: "Classic"
};
const book2 = {
    title: "Next title",
    author: "Next author",
    isbn: "56789",
    category: "Classic"
};

const library = [];

user1.borrowed = book1;

const book3 = {
    title: "Third",
    author: "Third author",
    isbn: "333333",
    category: "Unknown"
};

user2.borrowed = book1;
user2.borrowed[1] = book3; // this does NOT add book3 to 'borrowed' array for user2. It prints
// borrowed: { '1': [Object]}  instead of the info of book3. 'push' also does not work.

library.push(user1, user2);
console.log(library);
