let gridSize = 16;
let gridColor = '#252525';

// Create Grid

const GRID = document.querySelector('.grid');
      GRID.style.display = 'grid';
      GRID.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
      GRID.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

function createGrid(gridSize){
    for (let i = 0; i < (gridSize * gridSize); i++){
        let gridCell = document.createElement('div');
            gridCell.classList.add('grid__cell');
        GRID.appendChild(gridCell);
    }

    // Grid Cell Shading Function
    let gridCell = document.querySelectorAll('.grid__cell');

    gridCell.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            this.style.backgroundColor = `${gridColor}`;
        })
    });
}

createGrid(gridSize)



// Grid Controls

const gridControls = document.querySelector('.grid-controls');
const resetButton = document.querySelector('.grid-controls__reset');

    // Interface
    let infoBox = document.createElement('div');
    let sizeValue = document.createElement('h2');
    let colorValue = document.createElement('h2');

    infoBox.classList.add('grid-controls__info');

    sizeValue.textContent = `${gridSize} x ${gridSize}`;
    colorValue.textContent = gridColor;

    infoBox.appendChild(sizeValue);
    infoBox.appendChild(colorValue);
    gridControls.insertBefore(infoBox, resetButton);

// Control Functions
const sizeControl = document.querySelector('#grid-size');

sizeControl.addEventListener('input', function(){
    gridSize = sizeControl.value;

    GRID.innerHTML = "";
    GRID.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    GRID.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    sizeValue.textContent = `${gridSize} x ${gridSize}`;   

    createGrid(gridSize);

    gridCell = document.querySelectorAll('.grid__cell');
});

const colorControl = document.querySelector('#grid-color');

colorControl.addEventListener('input', function(){
    gridColor = colorControl.value;
    colorValue.textContent = gridColor;
})

// Mobile Control Tab
const mobileControl = document.querySelector('.grid-controls__mobile-tab');

mobileControl.addEventListener('click', () => {
    if (gridControls.classList.contains('active')){
        gridControls.classList.remove('active');
        mobileControl.textContent = "Controls";
    } else {
        gridControls.classList.add('active');
        mobileControl.textContent = "Show Less";
    }
});

resetButton.addEventListener('click', () => {
    GRID.innerHTML = "";
    createGrid(gridSize);
});
