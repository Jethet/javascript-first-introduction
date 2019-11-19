function check_colour(colour) {
  if (colour === "blue" || colour === "red") {
    console.log("This is the right colour");
  } else if (colour !== "green") {
    console.log("This is not green");
  } else if (colour === "green") {
    console.log("This is green!!");
  } else {
      console.log("Get blue, this is wrong");
    }
}

  check_colour("blue");
  check_colour("yellow");
  check_colour("red");
  check_colour("blue red");
  check_colour("green");
