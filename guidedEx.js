// Guided example of board play

// board = [ [{},{},{}], [{},{},{}] [{},{},{}] ] from 0 to 2

let board = [[{x:0, y:0}, {x:0, y:1}, {x:0, y:2}], 
            [{x:1, y:0,}, {x:1, y:1}, {x:1, y:2}], 
            [{x:2, y:0}, {x:2, y:1}, {x:2, y:2}]]; 

const player = {
    x:1,
    y:1
};
function placeHorizontal(thePlayer, command){
    //move player left:
    if(thePlayer.y >= 0 && thePlayer.y<2){
        if (command === "1"){
    //substract from y property:
            thePlayer.y--;
    } else {
    // move to the right: add to y property:
        thePlayer.y++;
    }
    console.log(`Player has position: x=${thePlayer.x} and y=${thePlayer.y}`);
    } else {
        console.log("You cannot place player outside of the board.");
    }
}
placeHorizontal(player.y, "2");