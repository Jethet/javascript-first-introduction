// Guided example of board play

// board = [ [{},{},{}], [{},{},{}] [{},{},{}] ] from 0 to 2

let board = [[{x:0, y:0}, {x:0, y:1}, {x:0, y:2}], 
            [{x:1, y:0,}, {x:1, y:1}, {x:1, y:2}], 
            [{x:2, y:0}, {x:2, y:1}, {x:2, y:2}]]; 

const player = {
    x:1,
    y:1,
    path: [{x:1, y:1}]
};

function placeHorizontal(thePlayer, command){
    //move player left:
    if(thePlayer.y >= 0 && thePlayer.y<2){
        if (command === "l"){
    //substract from y property:
            thePlayer.y--;
    } else {
    // move to the right: add to y property:
        thePlayer.y++;
    }
    thePlayer.path.push({x: thePlayer.x, y: thePlayer.y});
    console.log(`Player has position: x=${thePlayer.x} and y=${thePlayer.y}`);
    } else {
        console.log("You cannot place player outside of the board.");
    }
}
function placeVertical(thePlayer, command){
    // move player up
    if (thePlayer.x >=0 && thePlayer.x < 2) {
        if (command === "u") {
            thePlayer.x--;
     //move player down
        } else {
            thePlayer.x++;
        }
        thePlayer.path.push({x: thePlayer.x, y: thePlayer.y});
        console.log(`Player has the position x=${thePlayer.x} and y=${thePlayer.x}`);
    } else {
        console.log("You cannot place player outside of the board.");
    }
}

function command(thePlayer, orders){
    for (let i = 0; i < orders.length; i++){
        let order = orders[i];
        switch(order){
            case "l":
            case "r":
                placeHorizontal(thePlayer, order);
                break;
            case "u":
            case "d":
                placeVertical(thePlayer, order);
                break;
        }
    }
    console.log(thePlayer.path);
}

command(player, "lurrddd");
