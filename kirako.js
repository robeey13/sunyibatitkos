const pieces = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, null
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createPuzzle() {
    const puzzle = document.getElementById('puzzle');
    puzzle.innerHTML = '';
    pieces.forEach((piece, index) => {
        const pieceElement = document.createElement('div');
        pieceElement.classList.add('piece');
        if (piece) {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${piece}.jpg`;
            pieceElement.appendChild(imgElement);
            pieceElement.addEventListener('click', () => movePiece(index));
        } else {
            pieceElement.classList.add('empty');
        }
        puzzle.appendChild(pieceElement);
    });
}

function movePiece(index) {
    const emptyIndex = pieces.indexOf(null);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 4, emptyIndex + 4];
    if (validMoves.includes(index)) {
        [pieces[emptyIndex], pieces[index]] = [pieces[index], pieces[emptyIndex]];
        createPuzzle();
        if (isSolved()) {
            alert('Gratulálok! Megoldottad a puzzle-t!');
        }
    }
}

function isSolved() {
    return pieces.join('') === '123456789101112131415null';
}

shuffle(pieces);
createPuzzle();