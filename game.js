let gridRow = [];
let gridColumn = [];
let drawBox = document.getElementById("draw-box");


function createGrid(sizeInput) {
    for(let i = 0; i < sizeInput; i++) {
        gridRow[i] = document.createElement("div");
        drawBox.appendChild(gridRow[i]);
        gridRow[i].setAttribute("id", "rowDiv");
        for(let j = 0; j < sizeInput; j++) {
            gridColumn[j] = document.createElement("div");
            gridRow[i].appendChild(gridColumn[j]);
            gridColumn[j].setAttribute("id", "columnDiv");
            gridColumn[j].textContent = `${j}`
        }
    }


}

createGrid(16);