function butons() {
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    for (let i = 0; i <= 4; i++) {
        const section = document.createElement("section");
        section.classList.add("ball");
        section.classList.add("pecas")
        left.appendChild(section);
        section.setAttribute("draggable", "true");
    }

    for (let i = 0; i <= 4; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.classList.add("pecas");
        right.appendChild(div);
        div.setAttribute("draggable", "true")
        for (let i = 0; i <= 1; i ++) {
            const section = document.createElement("section")
            div.appendChild(section);
        }
    }
    functionPecas();
}



function functionPecas() {
    const pecas = document.querySelectorAll('.pecas');
    console.log(pecas.length);

    pecas.forEach(peca => {
        peca.addEventListener('dragstart', start);
        peca.addEventListener('drag', indrag);
        peca.addEventListener('dragend', end);
    })

    const areas = document.querySelectorAll('.dropzone');
    console.log(areas.length);
    
    areas.forEach(area => {
        area.addEventListener('dragenter', enter);
        area.addEventListener('dragover', over);
        area.addEventListener('dragleave', leave);
        area.addEventListener('drop', area);
    })
}

function start() {
    console.log("arrastou");
    this.classList.add('is-dragging')
}

function indrag() {
    // console.log("arrastando")
}

function end() {
    console.log("parou")
    this.classList.remove('is-dragging')
}

function enter(){
    console.log("entrou")
}

function over(){
    console.log("sobre")
    const pecaSendoArrastado = document.querySelector('.is-dragging')
    this.appendChild(pecaSendoArrastado)
}

function leave(){
    console.log("saiu")
}

function area(){
    console.log("soltou")
}