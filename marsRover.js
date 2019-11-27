// Rover Object Goes Here
// ======================




// ======================

let rover = {
    direction: "N"
};

function turnLeft(rover){
    console.log("turnLeft was called");
}

function turnRight(rover){
    console.log("turnRight was called");
}

function moveForward(rover){
    console.log("moveForward was called");
}

function turnRover(rover, directions){
    for (i = 0; i <= direction.length; i++){
        let direction = directions[i];
        switch(direction){
            case "l":
                turnLeft(rover, direction);
                break;
            case "r":
                turnRight(rover, direction);
                break;
            case "f":
                moveForward(rover, direction);
                break;
        }
        console.log(`Rover facing direction ${direction}`);
    }
}