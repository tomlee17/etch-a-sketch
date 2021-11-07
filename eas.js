const container = document.querySelector('.container');

function makeGrids(rows, cols) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.width = 100 / cols + '%';
    grid.style.paddingTop = 100 / rows + '%';
    // grid.textContent = '123';
    for (let i = 0; i < (rows * cols); i++) {
        container.appendChild(grid.cloneNode(true));
    }
}

makeGrids(16, 16);

const grids = Array.from(document.querySelectorAll('.grid'));
//console.log(grids);
grids.forEach(grid => grid.addEventListener('mouseover', (e) => {
    console.log(grid);
    e.target.classList.add('grid-hover');
}))

