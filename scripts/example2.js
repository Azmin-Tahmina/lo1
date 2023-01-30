"use strict";

/*
 Filename:    example2.js
 Student:     Michael Grzesina (cst000)
 Date:        1/4/2019
 Purpose:     Start and stop counter for web page
*/

let counter = 0;
let counterTimer;
const counterPara = document.getElementById("counter");
const counterButton = document.getElementById("btnCounter");
counterButton.onclick = startCounter;


function runCounter() {
    counter++;
    counterPara.innerHTML = counter;
    counterTimer = setTimeout(runCounter, 1000);
}


function startCounter() {
    counterButton.value = "Click to STOP the counter";
    counterButton.onclick = stopCounter;
    counterTimer = setTimeout(runCounter, 1000);

}


function stopCounter() {
    clearTimeout(counterTimer);
    counterButton.value = "Click to RESTART the counter";
    counterButton.onclick = startCounter;
    window.alert("You stopped the counter with a count of " + counter);
}