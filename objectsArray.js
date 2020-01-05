const todos = [
    {
        id: 1,
        text: 'Backup laptop',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting team',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for (let item of todos) {
    console.log(item.id, item.text);
}

// FUNCTIONAL PROGRAMMING: high order array methods

// forEach:
todos.forEach(function(item) {
    console.log(item.text, item.isCompleted);
});

// map ==>> RETURNS AN ARRAY, so you have to assign it to a variable:
const idTodos = todos.map(function(item) {
    return item.id;
});
console.log(idTodos);

// filter:
const completed = todos.filter(function(item) {
    return item.isCompleted === true;
});
console.log(completed);

// COMBINE filter, map:
const completedTodos = todos.filter(function(item) {
    return item.isCompleted === true;
}).map(function(item){
    return item.text;
});
console.log(completedTodos);


/* Convert JS to JSON format: similar code:

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
*/