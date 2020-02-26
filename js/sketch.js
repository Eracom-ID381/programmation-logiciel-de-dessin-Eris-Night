function setup() {
    createCanvas(windowWidth, windowHeight); // variable de javascript en général, ca défini que notre canvas prendra la taille de l'écran dans le quel on l'ouvre
    background(255);
    noStroke();
}

function draw() {
    fill(0);
    if (mouseIsPressed) {
        circle(mouseX, mouseY, 50);
    }

}

function windowResized() { // change la taille du canvas quand on change la taille de la fenêtre
    resizeCanvas(windowWidth, windowHeight);
    background(255); // petit bug qui fait qu'on est obligé de remettre le background
}