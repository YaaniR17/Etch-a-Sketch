const board = document.getElementById("board-container");
let currentMode = "black";

// I made it so that the default grid is 16x16
createGrid(16);

function createGrid(size) {
    // This clears the board
    board.innerHTML = "";
    
    // Setting up the grid columns and rows based on size picked by the user
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalCells = size * size;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Hover effect
        cell.addEventListener("mouseover", function() {
            if (currentMode === "black") {
                cell.style.backgroundColor = "black";
            } else if (currentMode === "random") {
                // Generate a random color string
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${r},${g},${b})`;
            }
        });

        board.appendChild(cell);
    }
}

// Function for the Change Size button
function changeSize() {
    let input = prompt("Enter a number for the new grid (1-100):");
    
    if (input === null || input === "") {
        return; // do nothing if they hit cancel
    }

    if (input > 0 && input <= 100) {
        createGrid(input);
    } else {
        alert("Error: Please enter a number between 1 and 100.");
    }
}

// Helper to set the mode
function setColor(mode) {
    currentMode = mode;
}

// Reset button
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    let currentSize = Math.sqrt(document.querySelectorAll(".cell").length);
    createGrid(currentSize);
});