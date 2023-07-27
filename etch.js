const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.size-btn');
const resetBtn = document.querySelector('.reset-btn');
const colorPicker = document.querySelector('#color');




let width = 16;
let cells = document.querySelectorAll('.cell');

function createPad(container, width){
    let cellWidth = (500/width).toString();
    // Loops for each row and column
    for(let i = 0; i < width; i++){
        for (let j = 0; j < width; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellWidth}px`;
            container.appendChild(cell);
        }
    }
    // Sets up a grid layout
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`
    cells = document.querySelectorAll('.cell');
}

// Adds hover functionality
function initialiseCells(penColor="black"){
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) =>{
            cell.style.backgroundColor = penColor;
        })
    })
}

// Creates initial board
createPad(container, width);
initialiseCells();


// Adds functionality to resize the board
resizeBtn.addEventListener('click', (e)=>{
    width = Number(prompt("Please enter a number 100 or less"));
    cells.forEach(cell => cell.remove())
    createPad(container, width);
    initialiseCells();
})

// Adds reset functionality
resetBtn.addEventListener('click', (e) => {
    cells.forEach(cell => cell.style.backgroundColor = "aliceblue");
})

// Adds color picking functionality
colorPicker.addEventListener('input', ()=>{
    penColor = colorPicker.value;
    initialiseCells(penColor);
})