let newArray = [0,1,2,3,4,5,6,7,8,9];

for (let i=0; i<= newArray.length; i++){
    console.log(i + 5);
}

newArray.forEach(function(i) {
    console.log(i);
});

// THIS IS THE SAME AS arrow function:

newArray.forEach(name => console.log(name));

newArray.forEach(function(name){
    console.log(`This is ${name}`);
  });

const examResult = [ 'John', 'Ben', 'Chris', 'Dave'];

examResult.forEach(function(result, index){
    console.log(`${result} received result ${index}!`);
});