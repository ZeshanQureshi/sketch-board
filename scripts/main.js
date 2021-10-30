let container = document.getElementById("board");
let row = container.insertRow(0);

function initializeGrid(numPixels) {

    for (i = 0 ; i < numPixels ; i++) {
        for (j = 0 ; j < numPixels ; j++) {
            container.appendChild(document.createElement("td"));
        }

    }
    
}