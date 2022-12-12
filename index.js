"use strict"


// Grid
let allowDraw = false;
let gridSquares = 16;
let newDiv;
let haveBorders = true;


// Drawing colors
let colorStatus = false; // for multiple colors
let shadowStatus = false; // for adding blackness
let redColor = 0;
let greenColor = 0;
let blueColor = 0;


// Elements
const container = document.getElementById("container");
const cleanGrid = document.getElementById("clear");
const newGrid = document.getElementById("popup");
const randomColor = document.getElementById("random");
const shadowColor = document.getElementById("blackness");


const borderToggle = document.getElementById("border-toggle");


function drawGrid(sqrs=gridSquares){
    let maxGrid = sqrs * sqrs;
    for (let i=0; i<maxGrid; i++){    
        
        newDiv = document.createElement("div");

        newDiv.classList.add("divStyle");
        container.append(newDiv);
        newDiv.addEventListener("mouseover", mouseOver, false);
     }
    }

drawGrid();

// Event listeners
container.addEventListener("mouseup", clicked, false);
container.addEventListener("mousedown", clicked, false);
cleanGrid.addEventListener("click", cleanIt, false);
newGrid.addEventListener("click", drawNewGrid, false);
randomColor.addEventListener("click", drawRandomColor, false);
shadowColor.addEventListener("click", drawShadowColor, false);
borderToggle.addEventListener("click", toggleBorder, false);


function toggleBorder(){
    haveBorders = !haveBorders;
    for (const child of container.children) {
        if (!haveBorders){
        child.style.border= 'none';
        }
        if (haveBorders){
            child.style.border= '1px solid #f33';
        }
    }
    
}


function clicked(event){
    
    console.log(event.type);
    if(event.type==="mousedown" && colorStatus === false && shadowStatus === false){
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
        event.preventDefault();
        allowDraw=true;
    } else if(event.type==="mousedown" && colorStatus === true){
    
        redColor = Math.floor(Math.random() * 256);
        blueColor = Math.floor(Math.random() * 256);
        greenColor = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

        allowDraw=true;     
    } else if(event.type === "mousedown" && shadowStatus === true){
        console.log(redColor)
        redColor = 200;
        blueColor = 200;
        greenColor= 200;
        event.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
        allowDraw = true;

    }
    
    else {
        allowDraw = false;
    }
}



function mouseOver(event){
    
    if (shadowStatus) {
        if (redColor>0) {redColor -= 20;}
        if (greenColor>0) {greenColor -= 20;}
        if (blueColor>0) {blueColor -= 20;}

    }
    
    if((allowDraw && colorStatus === false) || (shadowStatus===true && allowDraw)){
        
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
    let gridPrompt = prompt("To create a new grid enter the number of squares per side", 30);
    
    if (gridPrompt<=100 && gridPrompt !== null && gridPrompt !== ''){
        gridSquares = gridPrompt;

        container.style.gridTemplateColumns = `repeat(${gridSquares}, 1fr)`;
        cleanIt(gridSquares);
    }

}
  
function drawRandomColor(){
    colorStatus = !colorStatus;
    shadowStatus = false;
    if (colorStatus==false){
        redColor =0;
        greenColor=0; 
        blueColor = 0;
    }  
} 

function drawShadowColor(){
    
    shadowStatus = !shadowStatus;
    // console.log(shadowStatus)

    colorStatus = false;
    if (shadowStatus==false){
        redColor =0;
        greenColor=0; 
        blueColor = 0;
    }  
} 






