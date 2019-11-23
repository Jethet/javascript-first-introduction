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
let basic = {
  language: "JavaScript",
  frameworks: [
    {
      end: "back",
      list: [
        {
          name: "ExpressJS",
          released: 2010
        },
        {
          name: "MeteorJS",
          released: 2012
        }
      ]
    },
    {
      end: "front",
      list: [
        {
          name: "ReactJS",
          released: 2013
        },
        {
          name: "VueJS",
          released: 2014
        }
      ]
    }
  ]
};
console.log(basic.frameworks);

