"use strict"

let allowDraw = false;


const container = document.getElementById("container");
const cleanGrid = document.getElementById("clear");



function drawGrid(sqrs=16){
    let maxGrid = sqrs * sqrs;
    for (let i=0; i<maxGrid; i++){    
        
        const newDiv = document.createElement("div");

        newDiv.classList.add("divStyle");
        container.append(newDiv);
        newDiv.addEventListener("mouseover", mouseOver, false);
     }
    }

drawGrid();


container.addEventListener("mouseup", clicked, false);
container.addEventListener("mousedown", clicked, false);
cleanGrid.addEventListener("click", cleanIt, false);

function clicked(event){
    
    console.log(event.type);
    if(event.type==="mousedown"){
        //event.preventDefault();
        allowDraw=true;
    } else {
        allowDraw = false;
    }
}



function mouseOver(event){
    if(allowDraw){
        event.target.style.backgroundColor = "black";
    }
    
}

//container.style.gridTemplateColumns = "repeat(10, 1fr)";

function cleanIt(){
    var child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }

    drawGrid();
}
  
 








