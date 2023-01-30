"use strict";

/*
 Filename:    example1.js
 Author:      Michael Grzesina (cst000)
 Date:        1/4/2019
 Purpose:     Code to update clock
*/

const timeArea = document.getElementById("timeBox");

function updateTime() {
    let currentDate = new Date();
    timeArea.innerHTML = currentDate.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}

updateTime();
