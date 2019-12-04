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

cc(5);
cc(4);
