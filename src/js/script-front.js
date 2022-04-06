function butons() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    for (let i = 0; i <= 4; i++) {
        const section = document.createElement("section");
        section.classList.add("ball");
        left.appendChild(section);
        section.setAttribute("draggable", "true");
    }

    for (let i = 0; i <= 4; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        right.appendChild(div);
        div.setAttribute("draggable", "true")
        for (let i = 0; i <= 1; i ++) {
            const section = document.createElement("section")
            div.appendChild(section);
        }
    }
}