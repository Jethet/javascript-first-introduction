// Guided example of board play

// board = [ [{},{},{}], [{},{},{}] [{},{},{}] ] from 0 to 2

let board = [[{x:0, y:0}, {x:0, y:1}, {x:0, y:2}], 
            [{x:1, y:0,}, {x:1, y:1}, {x:1, y:2}], 
            [{x:2, y:0}, {x:2, y:1}, {x:2, y:2}]]; 

const player = {
    x:1,
    y:1
};

let playerPath = [];

function command(thePlayer, orders){
    for (i = 0; i < orders.length; i++){
        let order = orders[i];
        switch(order){
            case "l":
                placeHorizontal(thePlayer, order);
                break;
            case "r":
                placeHorizontal(thePlayer, order);
                break;
            case "u":
                placeVertical(thePlayer, order);
                break;
            case "d":
                placeVertical(thePlayer, order);
                break;
        }
    }
    console.log(thePlayer.path);
}