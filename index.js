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

function reDo(){
    let again = prompt(" Is your trip okay? Enter Y or N")
    return again;
}

let info = "Your trip will be in " + rDest + ". You will eat " + rRest + ". Riding in a " +
rTrans + ", and going to a " + rEnter + "."

alert(info)

let choice = "n"

while(choice != "Y" || choice != "y"){
    choice = reDo();
    if(choice === "Y" || choice === "y"){
        alert("Enjoy your trip!");
        break;
    }
    else if (choice === "N" || choice === "n"){
        let rDest = destination();
        let rRest = restuarant();
        let rTrans = transportation();
        let rEnter = entertainment();

        let newInfo = "Your new trip is in " + rDest + ". Eating " + rRest + ". Riding in a " + rTrans + ", and going to a " + rEnter + "."
        alert(newInfo);
        console.log(newInfo);
    }
}
