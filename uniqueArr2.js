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
  
function uniquifyArray(words){
    let uniqueArray = [];
    for (let word of words){
        if (!uniqueArray.includes(word)) uniqueArray.push(word);
            return uniqueArray;
    }
}
console.log(uniquifyArray(wordsUnique));