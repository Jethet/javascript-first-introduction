let number = 30;

  do {
    console.log(number);
    number -= 1;
} while (number !==0);

console.log("Next exercise");

for (let i = 0; i < 30; i++){
  if (i === 15) { continue; }  // skips number 15
  else if (i === 21){
    console.log("whatever");
    break;
  } else {
    console.log(i);
  }
}
