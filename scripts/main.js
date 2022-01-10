const container = document.getElementById("grid");

let colourPick = document.getElementById("colourSelect").value;

function initializeGrid(numPixels) {

    for (i = 0 ; i < numPixels ; i++) {
        for (j = 0 ; j < numPixels ; j++) {
            grid.appendChild(document.createElement("div")).classList.add("layout");
        }

    }
    
}