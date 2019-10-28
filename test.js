/*Your task is to make a function that can take any non-negative integer as a argument
and return it with its digits in descending order. Essentially, rearrange the digits to
create the highest possible number.
Examples: input: 21445    output: 54421*/

function foo(i) {
  if (i < 0)
    return;
  console.log('begin: ' + i);
  foo(i - 1);
  console.log('end: ' + i);
}
foo(3);
