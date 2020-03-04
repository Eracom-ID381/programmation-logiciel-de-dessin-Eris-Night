let strokeVal = 0;

function setup() {
    createCanvas(windowWidth, windowHeight); // variable de javascript en général, ca défini que notre canvas prendra la taille de l'écran dans le quel on l'ouvre
    background(255);
    // noStroke();
}

function draw() {
    stroke(strokeVal); //c'est le contour des formes
    strokeWeight(50);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

}

function keyPressed() {
    if (strokeVal === 255 && keyCode === BACKSPACE) {
        strokeVal = 0;
    } else if (keyCode === BACKSPACE) {
        strokeVal = 255;
    } //pour effacer, donc si c'est pas en blanc bah ca le met en blanc, si non en noir
    if (keyCode === 82) {
        strokeVal = 'red';
    }
    if (keyCode === 68) {
        strokeVal = 'black';
    }
    if (keyCode === 66) {
        strokeVal = 'blue';
    }
    if (keyCode === 71) {
        strokeVal = 'green';
    }
    if (keyCode === 80) {
        strokeVal = 'pink';
    }
    if (keyCode === 67) {
        strokeVal = 'cyan';
    }
    if (keyCode === 89) {
        strokeVal = 'yellow';
    }
    if (keyCode === 79) {
        strokeVal = 'orange';
    }
    if (keyCode === 86) {
        strokeVal = 'purple';
    }
}


function windowResized() { // change la taille du canvas quand on change la taille de la fenêtre
    resizeCanvas(windowWidth, windowHeight);
    background(255); // petit bug qui fait qu'on est obligé de remettre le background
}