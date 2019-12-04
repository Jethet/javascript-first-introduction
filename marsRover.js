
let rover = {
    direction: "N"
};

let directions = "";

function turnLeft(rover, directions){
    if (rover.direction === "N" && directions === "l"){
            rover.direction === "W";
            console.log(rover.direction);
  }   
}

function turnRight(rover){
    console.log("turnRight was called");
}

function moveForward(rover){
    console.log("moveForward was called");
}

function manageRover(rover, directions){
    for (let i = 0; i <= directions.length; i++){
        let direction = directions[i];
        switch(direction){
            case "l":
                turnLeft(rover, direction);
                break;
  //          case "r":
  //              turnRight(rover, direction);
  //              break;
  //          case "f":
  //              moveForward(rover, direction);
  //              break;
        }
        console.log(`Rover facing direction ${direction}`);
    }
}
manageRover(rover, "lrl");

