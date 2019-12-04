
for (let i = ""; i.length <= 10; i += "*"){
  console.log(i);
}

for (let i = 10; i >= 0; i--){
  console.log(i);
}

const statement = "We are in Ironhack";

for(let i = 0; i < 10; i++){
  if (i % 2 === 0) {
    let x = 0;

    while (x < statement.length) {
      let letter = statement[x];
      if (letter === "a") {
        console.log(i + " Cheers!");
      }
      x++;
    }
  }
}

console.log("next exercise");
