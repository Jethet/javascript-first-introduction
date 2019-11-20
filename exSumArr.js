//Given array of numbers, calculate the sum:

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (let i = 0; i < prices.length; i++) {
   console.log(Math.round((sum += prices[i]) * 10) / 10);  // NOTE: += to increase every time
}

//Bonus: Round the sum to one decimal.
