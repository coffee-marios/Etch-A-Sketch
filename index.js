"use strict"


const container = document.getElementById("container");



let maxGrid = 16 * 16;

for (let i=0; i<maxGrid; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("divStyle");
    container.append(newDiv);
    console.log(i);
    

}

