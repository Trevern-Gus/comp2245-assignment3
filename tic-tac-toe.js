window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let grid = Array(9).fill(null);
    let currentPlayer = 'X';

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener("mouseover" , () => {
            square.classList.add('hover');
        })

        square.addEventListener("mouseout" , () => {
            square.classList.remove('hover');
        })

        square.addEventListener('click', () => {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                grid[index] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }

        });
    });

});
        