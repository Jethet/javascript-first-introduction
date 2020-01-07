
function moveForward(number){
    for (let i = 0; i < 9; i++){    
        console.log(i);
        }
}

moveForward(9);


// Sort numbers from low to high: (other way: use y - x):
numbers = [45, 98, 12,79, 35, 657, 233, 87];
val = numbers.sort(function(x,y){
    return x - y;
});
console.log(val);