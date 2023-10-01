function parts() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    
    for (let i = 0; i <= 4; i++) {
        const element = document.createElement("button");
        element.classList.add('ball');
        element.classList.add('pieces');
        element.setAttribute("draggable", "true");
        element.setAttribute("data-piece", 1);
        left.appendChild(element);

        const elementChild = document.createElement("img");
        elementChild.setAttribute('src', './src/images/ball.svg')

        element.appendChild(elementChild);
    }

    for (let i = 0; i <= 4; i++) {
        const element = document.createElement("button");
        element.classList.add('square');
        element.classList.add('pieces');
        element.setAttribute("draggable", "true");
        element.setAttribute("data-piece", 2);
        right.appendChild(element);

        const elementChild = document.createElement("img");
        elementChild.setAttribute('src', './src/images/x.svg')

        element.appendChild(elementChild);
    }   
}
parts()
