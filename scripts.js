// Controls gameboard
(() => {
    let gameBoard;
})();

// Controls current player and symbol display
(() => {
    const playerOne = player('Player One', 'X');
    const playerTwo = player('Player Two', 'O');
    let displayController
})();

// Controls players
function player (name, symbol) {
    return { name, symbol };
}


