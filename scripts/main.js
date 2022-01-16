var colourPicker = document.getElementById("colourSelect");
var slider = document.getElementById("sizeSelect");
var clearButton = document.getElementById("clearSelect");

colourPick = colourPicker.value;

slider.step = "8";

colourPicker.addEventListener("input", function() {
    colourPick = colourPicker.value;
});

slider.addEventListener("input", function() {
    deleteBoard();
    initializeGrid(this.value);
})

clearButton.addEventListener("click", function() {
    sliderValue = slider.value;
    clearBoard(sliderValue);
})

function initializeGrid(numPixels) {
    for (i = 0 ; i < numPixels ** 2; i++) {
            var square = document.createElement("div");
            square.style.backgroundColor = "white";
            square.style.width = 720/numPixels + "px";
            square.style.height = 720/numPixels + "px";
            square.style.float = "left";
            square.addEventListener("mouseover", function() {
                this.style.backgroundColor = colourPick;
            });
            document.getElementById("grid").appendChild(square);
    }
}

function clearBoard(numPixels) {
    for (j = 0; j < numPixels ** 2; j++) {
        document.getElementById("grid").children[j].style.backgroundColor = "white";
    }
}

function deleteBoard() {
    document.getElementById("grid").querySelectorAll('*').forEach(n => n.remove());
}