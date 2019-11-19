let hungry = true;
let breakfastYes = true;
let lunchTime = false;
let dinnerTime = true;
let breakfastTime = false;

if (hungry && !lunchTime){
  console.log("Lunchtime");
} else if (dinnerTime && !hungry){
  console.log("Not very hungry");
} else if (breakfastTime || breakfastYes){
  console.log("French toast!");
} else {
  console.log("Snack");
}
