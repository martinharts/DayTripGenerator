"use strict"
//created arrays for destination, restuarant, transportation, and entertainment
let dest = ["Hawaii", "California", "New York", "Chicago"];
let rest = ["Chinese", "American", "Italian", "Japanese"];
let transpo = ["Car", "Train", "Plane", "Boat"]
let enter = ["Play", "Movie", "Sport Event", "Bar"]
// functions to generate random index number for arrays
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
// call for functions 
let rDest = destination();
let rRest = restuarant();
let rTrans = transportation();
let rEnter = entertainment();
//function to prompt user asking to confirm or deny generated trip
function reDo(){
    let again = prompt(" Is your trip okay? Enter Y or N")
    return again;
}
//alert for initial generated trip 
let info = "Your trip will be in " + rDest + ". You will eat " + rRest + ". Riding in a " +
rTrans + ", and going to a " + rEnter + "."

alert(info)

let choice = "n"
// while loop with conditions for user input of Y or N to generate new trip and console.log acceptance
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
