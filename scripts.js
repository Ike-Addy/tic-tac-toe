// Controls gameboard
const gameboard = (function () {
    const winConditions = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [7,5,3]
    ];
    return { winConditions };
})();

console.log(gameboard.winConditions);

// Controls current player and symbol display
(() => {
    const playerOne = player('Player One', 'X');
    const playerTwo = player('Player Two', 'O');
    let displayController
})();

function player (name, symbol) {
    return { name, symbol };
}


