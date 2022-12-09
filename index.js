"use strict"

let allowDraw = false;
let gridSquares = 16;


const container = document.getElementById("container");
const cleanGrid = document.getElementById("clear");
const newGrid = document.getElementById("popup");


function drawGrid(sqrs=gridSquares){
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
newGrid.addEventListener("click", drawNewGrid, false);



function clicked(event){
    
    console.log(event.type);
    if(event.type==="mousedown"){
        event.target.style.backgroundColor = "black";
        event.preventDefault();
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

//

function cleanIt(){
    let child = container.lastElementChild; 
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    
    drawGrid(gridSquares);
}

function drawNewGrid(){
    let gridPrompt = prompt("To create a new grid enter the number of squares per side", 17);
    if (gridPrompt<=100){
        gridSquares = gridPrompt;

        container.style.gridTemplateColumns = `repeat(${gridSquares}, 1fr)`;
        cleanIt(gridSquares);
    }

}
  
 








