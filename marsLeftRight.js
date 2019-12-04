let rover = {
    direction: ["N", "S", "E", "W"]
};

function turnLeft(rover){
        rover.direction = "W";
        console.log(rover.direction);  
}

function turnRight(rover){
    rover.direction = "E";
    console.log(rover.direction);
}

turnLeft(rover);
turnRight(rover);