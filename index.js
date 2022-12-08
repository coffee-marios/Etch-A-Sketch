"use strict"

let clicked = false;

const container = document.getElementById("container");
container.addEventListener("mousedown", () => {clicked = true;}, false);
container.addEventListener("mouseup", () => {clicked = true;}, false);






let maxGrid = 16 * 16;

for (let i=0; i<maxGrid; i++){
    
    
    const newDiv = document.createElement("div");

    newDiv.classList.add("divStyle");
    container.append(newDiv);
    newDiv.addEventListener("mouseover", mouseOver, false);
   
    

}

function mouseOver(event){
    if(clicked){
        event.target.style.backgroundColor = "black";
    }
    
}

//container.style.gridTemplateColumns = "repeat(10, 1fr)";


  
 








