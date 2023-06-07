let drawBox = document.getElementById("draw-box");
let canvasTile;
let gridSize = 50;
let selectedColor = "black";
let eraserButton = document.getElementById("eraser-button");
let colorPicker = document.querySelector("#color-picker");
let gridSlider = document.querySelector("#slider");

function createGrid(sizeInput) {
    let gridRow = [];
    let gridColumn = [];
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
function clearGrid() {
    while(drawBox.firstChild) {
        drawBox.removeChild(drawBox.firstChild);
    }
}

function drawOnCanvas() {
    canvasTile = document.querySelectorAll(".columnDiv");
    canvasTile.forEach(element => {
        element.addEventListener("mouseover", function(e) {
            if(e.buttons === 1) {
            element.style.backgroundColor = selectedColor;
            }
            console.log("canvas clicked");
        });   
    }); 
}





createGrid(50);
drawOnCanvas();





eraserButton.addEventListener("click", function(e) {
    selectedColor = "white";
});


colorPicker.addEventListener("input", function(e) {
    selectedColor = colorPicker.value;


});

colorPicker.addEventListener("click", function() {
    selectedColor = colorPicker.value;
});

gridSlider.addEventListener("input", function(e) {
    gridSize = gridSlider.value;
    clearGrid();
    createGrid(gridSize);
    drawOnCanvas();
});


