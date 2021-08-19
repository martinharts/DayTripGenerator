"use strict"

let dest = ["Hawaii", "California", "New York", "Chicago"];
let rest = ["Chinese", "American", "Italian", "Japanese"];
let transpo = ["Car", "Train", "Plane", "Boat"]
let enter = ["Play", "Movie", "Sport Event", "Bar"]

function destination(){
    let randomDest = Math.floor(Math.random()*dest.length);
    return dest[randomDest]
}
function restuarant(){
    let randomRest = Math.floor(Math.random()*rest.length)
    return rest[randomRest]
}
function transportation(){
    let randomTrans = Math.floor(Math.random()*transpo.length)
    return transpo[randomTrans]
}
function entertainment(){
    let randomEnter = Math.floor(Math.random()*enter.length)
    return enter[randomEnter]
}

let rDest = destination();
let rRest = restuarant();
let rTrans = transportation();
let rEnter = entertainment();



function randomTrip(str){
    if(str === "1"){
        let newDest = rDest;
        while(curDest == newDest){
            newDest = rDest;
        }
    }
    if(curDest != newDest){
        curDest = newDest;
    }
    else if(str === "2"){
        let newRes = rRest;
        while(curRest == newRes){
            newRes = rRest;
        }
        if(curRest != newRes){
            curRest = newRes;
        }
    }
    else if(str === "3"){
        let newTrans = rTrans;
        while(curTrans == newTrans){
            newTrans = rTrans;
        }
        if(curTrans != newTrans){
            curTrans = newTrans;
        }
    }
    else if(str === "4"){
        let newEnter = rEnter;
        while(curEnter == newEnter){
            newEnter = rEnter;
        }
        if(curEnter != newEnter){
            curEnter = newEnter
        }
    }
}

