
let rover = {
    direction: "N"
};


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

