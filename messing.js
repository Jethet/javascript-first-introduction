// forEach method:

const myArr = [1,2,3,4,5];

function arrSum(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

console.log(arrSum(myArr));

const words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];

function sumChar(arr){
    let sum = 0;
    for (let word of arr){
        sum += word.length
    }
    return sum / arr.length;
}

console.log(sumChar(words));

myArr.forEach(function(e){
    e += 5;
    console.log(e);
});

myArr.forEach(function(e, index){
    console.log(index,e);
});

myArr.forEach(function(e){
    e = e + 'no.';
    console.log(e);
});
