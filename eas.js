const container = document.querySelector('.container');

function makeGrids(rowsCols) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = 100 / rowsCols + '%';
    grid.style.paddingTop = grid.style.width;
    for (let i = 0; i < (rowsCols ** 2); i++) {
        container.appendChild(grid.cloneNode(true));
    }
}

makeGrids(16);


function randomColor(el) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

let grids = undefined;
function mouseSketch() {
    grids = Array.from(document.querySelectorAll('.grid'));
    grids.forEach(grid => grid.addEventListener('mouseover', (e) => {
        //e.target.classList.add('grid-hover');
        e.target.style.backgroundColor = randomColor();
    }))
}

mouseSketch();

function remakeGrid() {
    container.textContent = '';
    let newGrid = +prompt('Enter new grid\s number of squares per side. (Max=100)', '16');
    for (i = 0; i < 1;) {
        if (newGrid <= 100 && newGrid > 1 && Number.isInteger(newGrid)) {
            makeGrids(newGrid);
            i++;
        }
        else newGrid = +prompt('Please enter a number less than or equal to 100.', '16');
    }
}

const btn = document.querySelector('#clear');

btn.addEventListener('click', function () {
    grids.forEach(grid => grid.classList.remove('grid-hover'));
    remakeGrid();
    mouseSketch();
})



