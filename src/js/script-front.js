var positions = [
    [
        ['a'], ['b'], ['c']
    ], [
        ['d'], ['e'], ['f']
    ], [
        ['g'], ['h'], ['i']
    ]
];

document.querySelectorAll('.pieces').forEach(part => {
    part.addEventListener('dragstart', dragStart);
    part.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.dropzone').forEach(dropzone => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', drop);
})

function dragStart(e) {
    e.currentTarget.classList.add('is-dragging')
}

function dragEnd(e) {
    e.currentTarget.classList.remove('is-dragging')
}

function dragOver(e) {
    if (e.currentTarget.querySelector('.pieces') == null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector('.pieces') == null) {
        let pieceBeingDragged = document.querySelector('.is-dragging')
        pieceBeingDragged.setAttribute('draggable', 'false');
        e.currentTarget.appendChild(pieceBeingDragged)

        let piece = pieceBeingDragged.getAttribute('data-piece');
        let col = e.currentTarget.getAttribute('data-col');
        let row = e.currentTarget.getAttribute('data-row');

        positions[row][col] = piece;
        // console.table(positions)

        selectPieces(piece)
    }
}

function selectPieces(piece) {
    var x = '';
    var y = '';

    if (piece == 1) {
        // jogou com 1
        // bloqueia o 1 libera o 2
        x = document.getElementById('left');
        y = document.getElementById('right');
    }
    
    if (piece == 2) {
        // jogou com 2
        // bloqueia o 2 libera o 1
        y = document.getElementById('left');
        x = document.getElementById('right');
    }
    
    x.querySelectorAll('.pieces').forEach(piece => {
        piece.setAttribute('draggable', 'false')
        piece.setAttribute('disabled', 'true')
    })
    
    y.querySelectorAll('.pieces').forEach(piece => {
        piece.setAttribute('draggable', 'true')
        piece.removeAttribute('disabled')
    });
}