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




}


function windowResized() { // change la taille du canvas quand on change la taille de la fenêtre
    resizeCanvas(windowWidth, windowHeight);
    background(255); // petit bug qui fait qu'on est obligé de remettre le background
}