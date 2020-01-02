/*Your task is to make a function that can take any non-negative integer as a argument
and return it with its digits in descending order. Essentially, rearrange the digits to
create the highest possible number.
Examples: input: 21445    output: 54421*/

function descend(number) {
  var numb = [];
  for (let i = 0; i <= number.length; i++) {
    if (i > number[0]) {
      numb.add(i);
    } else {
      console.log(numb);
    }
  }
}

descend(21445);