let drawBox = document.getElementById("draw-box");
let canvasTile;
let gridSize = 50;
let selectedColor = "#222222";
let eraserButton = document.getElementById("eraser-button");
let colorPicker = document.querySelector("#color-picker");
let gridSlider = document.querySelector("#size-slider");
let sliderValue = document.querySelector("#slider-value");
let rainbowSwitch = document.querySelector("#rainbow-switch");
let rainbowState = false;

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
                if(rainbowState) {
                    if(element.dataset.val == "check") {
                        let newColor = element.style.backgroundColor;
                        element.style.backgroundColor = darkenRgb(newColor);                   
                    }
                    else {
                        const randomColor = getRandomRgb();
                        element.style.backgroundColor = randomColor;
                        element.setAttribute("data-val", "check");
                    }
                }
                else {
                    element.style.backgroundColor = selectedColor;
                    element.setAttribute("data-val", "check");
                }
                }
        });   
    }); 
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function darkenRgb(rgbColor) {
    let oldString = rgbColor.toString();
    let newString = oldString.substring(4,oldString.length - 1);
    newString = newString.split(",");
    let num1 = parseInt(newString[0]);
    let num2 = parseInt(newString[1]);
    let num3 = parseInt(newString[2]);

    r = (num1 - (num1/100)*20).toFixed();
    g = (num2 - (num2/100)*20).toFixed();
    b = (num3 - (num3/100)*20).toFixed();

    if(r < 6) {
        r = 0;
    }
    if(b < 6) {
        b = 0;
    }
    if(g < 6) {
        g = 0;
    }

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function turnOffRainbow() {
    if(rainbowState) {
        rainbowSwitch.click();
    }
}


createGrid(50);
drawOnCanvas();

rainbowSwitch.addEventListener("click", function() {
        if(rainbowState === false) {
            rainbowState = true;
            console.log("switch on" + rainbowState);
        }
        else {
            rainbowState = false;
            console.log("switch off" + rainbowState);
        }

});

eraserButton.addEventListener("click", function(e) {
    turnOffRainbow();
    selectedColor = "white";
});


colorPicker.addEventListener("input", function(e) {
    turnOffRainbow();
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
    sliderValue.textContent = gridSlider.value;

});


