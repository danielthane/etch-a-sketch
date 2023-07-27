const container = document.querySelector('.container');
const width = 16;
const cellWidth = (500/width).toString();

for(let i = 0; i < width; i++){
    for (let j = 0; j < width; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellWidth}px`;
        container.appendChild(cell);
    }
}

container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${width}, 1fr)`
container.style.gridTemplateRows = `repeat(${width}, 1fr)`

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) =>{
        cell.style.backgroundColor = "black";
    })
})