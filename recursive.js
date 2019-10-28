// Recursive function: start with the exit condition and return
// add the 'do something' after that
// The function can call itself: see foo() and multiply()

function foo(i) {
  if (i <= 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}



function multiply(arr, n) {
   if (n <= 0) {
     return arr[0];
   } else {
     return multiply(arr, n - 1) * arr[n];
     console.log(arr);
   }
 }

foo(3);
multiply([1, 2, 3], 6);
