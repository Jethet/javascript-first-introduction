
let rover = {
    direction: ["N", "S", "E", "W"]
};

function turnLeft(rover){
    rover.direction = "W";
 //   console.log(rover.direction);  
}

function turnRight(rover){
    rover.direction = "E";
 //   console.log(rover.direction);
}

//function moveForward(rover){
 //   console.log("moveForward was called");
//}

function manageRover(rover, directions){
    for (let i = 0; i <= directions.length; i++){
        let direction = directions[i];
        switch(direction){
            case "l":
                turnLeft(rover, direction);
                console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "r":
                turnRight(rover, direction);
                console.log(`Rover facing direction ${rover.direction}`);
                break;
//            case "f":
 //               moveForward(rover, direction);
   //             break;
            
        }
        
    }
}
manageRover(rover, "llr");

