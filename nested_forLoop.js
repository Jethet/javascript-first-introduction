
function multiply(arr){
  var mass = 1

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      mass = mass * arr[i][j];
    }
  }
return mass;
}

console.log(multiply([1], [2], [3]));
