
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
};

 function moveForward(rover){
    if (rover.x >= 0 && rover.x <= 9 && rover.y >= 0 && rover.y < 9){
        if (rover.direction === "N"){
            rover.y--;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "S"){
            rover.y++;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "W"){
            rover.x--;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "E"){
            rover.x++;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        }
    else {
        console.log("The rover cannot be placed outside the grid.");
    }
    rover.travelLog.push({x: rover.x, y: rover.y});
    console.log(rover.travelLog);
    }
}

function moveBackwards(rover){
    if (rover.x >= 0 && rover.x <= 9 && rover.y >= 0 && rover.y < 9){
        if (rover.direction === "N"){
            rover.y++;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "S"){
            rover.y--;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "W"){
            rover.x++;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "E"){
            rover.x--;
            console.log(`Position is: ${rover.x}, ${rover.y}`);
        }
    else {
        console.log("The rover cannot be placed outside the grid.");
    }
    rover.travelLog.push({x: rover.x, y: rover.y});
    console.log(rover.travelLog);
    }
}
moveBackwards(rover);
