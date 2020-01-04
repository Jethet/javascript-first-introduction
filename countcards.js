var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count = +1;
      console.log(count + " Bet");
      break;
  }

  return "Change Me";
}


//  This version is imcomplete, see count.js

cc(7);
cc(3);
cc("A");