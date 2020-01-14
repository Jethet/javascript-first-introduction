const myArr = [1,2,3,4,5];

myArr.forEach(function(e){
    e += 5;
    console.log(e);
});

myArr.forEach(function(e, index){
    console.log(index,e);
});