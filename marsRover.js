
let rover = {
    direction: "N",
    x: 0,
    y: 0
};

function turnLeft(rover){
    if (rover.direction === "N"){
        rover.direction = "W";
        //console.log(rover.direction); 
    } else if (rover.direction === "W"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "E";
        //console.log(rover.direction);
    } else if (rover.direction === "E"){
            rover.direction = "N";
            //console.log(rover.direction);
    }
}

function turnRight(rover){
    if (rover.direction === "N"){
        rover.direction = "E";
        //console.log(rover.direction); 
    } else if (rover.direction === "E"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "W";
        //console.log(rover.direction);
    } else if (rover.direction === "W"){
            rover.direction = "N";
            //console.log(rover.direction);
    }
}



function manageRover(rover, directions){
    for (let i = 0; i <= directions.length; i++){
        let orientation = directions[i];
        switch(orientation){
            case "l":
                turnLeft(rover, orientation);
                console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "r":
                turnRight(rover, orientation);
                console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "f":
                moveForward(rover, orientation);
                break;
            
        }
        
    }
}
manageRover(rover, "llll");

