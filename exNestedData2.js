// Having an array in objects and accessing elements
/*const theseObj = [
    {
      prop1: "One",
      prop2: "Two",
    },
    {
      prop1: "Word",
      prop2: ["Sentence", "Chapter"]
    }
];

let propAdd = {
  prop1: "Three",
  prop2: "Four"
};

theseObj.push(propAdd);
console.log(theseObj);
console.log(theseObj[1].prop2[0]);*/
let currentGroup = {
  course: "Web Development",
  type: "full-time",
  squadName: "squad-307",
  city: "Miami",
  teacher: {
    name: "Nick",
    age: 27
  },
  classroom: {
    floor: 3,
    seats: 30,
    available: true
  }
};
console.log(currentGroup);
console.log(currentGroup.teacher);
console.log(currentGroup.teacher.age);
console.log(currentGroup.classroom.available);
