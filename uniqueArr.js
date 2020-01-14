// Iteration #5: Unique arrays: does a word exist more than one time in the array?
const wordsUnique = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
  ];
  

function makeUniqueArr(wordArr){
  let uniqueArr = [];
    for (let i = 0; i < wordArr.length; i++) {
      let word = wordArr[i];
      if (uniqueArr.indexOf(word) < 0){
        uniqueArr.push(word);
      }
    }
}

 console.log(makeUniqueArr(wordsUnique));
  