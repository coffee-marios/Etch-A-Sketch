"use strict"


// Grid
let allowDraw = false;
let gridSquares = 16;


// Drawing colors
let colorStatus = false;
let redColor = 0;
let greenColor = 0;
let blueColor = 0;


// Elements
const container = document.getElementById("container");
const cleanGrid = document.getElementById("clear");
const newGrid = document.getElementById("popup");
const randomColor = document.getElementById("random");


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
randomColor.addEventListener("click", drawRandomColor, false);



function clicked(event){
    
    console.log(event.type);
    if(event.type==="mousedown" && colorStatus === false){
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
        event.preventDefault();
        allowDraw=true;
    } else if(event.type==="mousedown" && colorStatus === true){
        redColor = Math.floor(Math.random() * 256);
        blueColor = Math.floor(Math.random() * 256);
        greenColor = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

        allowDraw=true;     
    } 
    
    else {
        allowDraw = false;
    }
}



function mouseOver(event){
    if(allowDraw && colorStatus === false){
        
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    }

    if (allowDraw && colorStatus){
        redColor = Math.floor(Math.random() * 256);
        blueColor = Math.floor(Math.random() * 256);
        greenColor = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

    }
    
}



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
  
function drawRandomColor(){
    colorStatus = !colorStatus;
    if (colorStatus==false){
        redColor =0;
        greenColor=0; 
        blueColor = 0;
    }  
} 








