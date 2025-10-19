window.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const status = document.querySelector('#status');
    let grid = Array(9).fill(null);
    let currentPlayer = 'X';
    let gameOver = false;

    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener("mouseover", () => {
            square.classList.add('hover');
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove('hover');
        });

        square.addEventListener('click', () => {
            if (!gameOver && square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                grid[index] = currentPlayer;

                if (checkWinner(currentPlayer)) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add('you-won');
                    gameOver = true;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
    function checkWinner(player) {
        return wins.some(combination => {
            return combination.every(index => grid[index] === player);
        });
    }
});
