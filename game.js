let gridRow = [];
let gridColumn = [];
let drawBox = document.getElementById("draw-box");
let canvasTile;

function createGrid(sizeInput) {
    for(let i = 0; i < sizeInput; i++) {
        gridRow[i] = document.createElement("div");
        drawBox.appendChild(gridRow[i]);
        gridRow[i].setAttribute("id", "rowDiv");
        for(let j = 0; j < sizeInput; j++) {
            gridColumn[j] = document.createElement("div");
            gridRow[i].appendChild(gridColumn[j]);
            gridColumn[j].setAttribute("class", "columnDiv");
        }
    }


}

createGrid(50);
canvasTile = document.querySelectorAll(".columnDiv");

canvasTile.forEach(element => {
    element.addEventListener("mouseover", function(e) {
        if(e.buttons === 1) {
        element.style.backgroundColor = "black";
        }
    });   
});



// for(let i = 0; i < 6; i++) {
//     const testArray = document.querySelectorAll(".columnDiv");
//     console.log(testArray[i]);
// }







// document.querySelectorAll(".columnDiv").forEach(element => {
//     element.addEventListener("click", function() {
//         const currentTile = element;
//         currentTile.style.backgroundColor = "red";
//     });  
// });

// scissorsButton.addEventListener("click", function() {
//     const userPickBox = document.getElementById("user-pick");
//     userPickBox.textContent ="SCISSORS";

//         playRound("scissors");     
// });