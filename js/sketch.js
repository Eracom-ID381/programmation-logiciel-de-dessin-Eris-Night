let strokeVal = 0; //couleur du trait
let strokeValW = 10; //taille du trait
let distribution = new Array(200); //nmb de ligne qui va apparaître

function setup() {
    createCanvas(windowWidth, windowHeight); // variable de javascript en général, ca défini que notre canvas prendra la taille de l'écran dans le quel on l'ouvre
    background(255);
    for (let i = 0; i < distribution.length; i++) { //distribution c'est pour avoir de manière aléatoire des traits de taille différente
        distribution[i] = floor(randomGaussian(0, 1000));
    }
}

function draw() {
    stroke(strokeVal); //c'est le contour des formes
    strokeWeight(strokeValW); //taille du trait
    if (keyCode === 221 && mouseIsPressed === true) {
        translate(mouseX, mouseY, pmouseX, pmouseY);
        for (let i = 0; i < distribution.length; i++) {
            rotate(TWO_PI / distribution.length);
            stroke(strokeVal); //la couleur sera la même que celle qui est active
            strokeWeight(1); //épaisseur du trait
            let dist = abs(distribution[i]);
            line(40, 40, 500, 40); //défini le point central d'ou partent les trait, si on agrandit les valeur il y aura un cercle vide au milieu
        } //dans la troisième variable si je met “dist” ca permet de faire en sorte que les traits ai des tailles différente de manière aléatoire, voir au dessus
    } else if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY); //fait la ligne basique pour le dessin
    }
    cursor('crosshair'); //change le curseur
}

function keyPressed() {
    if (strokeVal === 255 && keyCode === BACKSPACE) {
        strokeVal = 0;
    } else if (keyCode === BACKSPACE) {
        strokeVal = 255;
    } //pour effacer, donc si c'est pas en blanc bah ca le met en blanc, si non en noir -------------------------
    if (keyCode === 38) { //flèche du haut
        strokeValW = strokeValW + 5;
    }
    if (keyCode === 40) { //flèche du bas
        strokeValW = strokeValW - 5;
    } //Ses touches sont pour agrandir ou diminuer la taille du pinceau de dessin -----------------------

    if (keyCode === 109) { //touche moins '-'
        strokeVal = strokeVal + 5;
    }
    if (keyCode === 107) { //touche plus '+'
        strokeVal = strokeVal - 5;
    } //touches pour changer la nuance de gris -----------------------------------------

    if (keyCode === 82) { //R
        strokeVal = 'red';
    }
    if (keyCode === 68) { //D
        strokeVal = 'black';
    }
    if (keyCode === 66) { //B
        strokeVal = 'blue';
    }
    if (keyCode === 71) { //G
        strokeVal = 'green';
    }
    if (keyCode === 80) { //P
        strokeVal = 'pink';
    }
    if (keyCode === 67) { //C
        strokeVal = 'cyan';
    }
    if (keyCode === 89) { //Y
        strokeVal = 'yellow';
    }
    if (keyCode === 79) { //O
        strokeVal = 'orange';
    }
    if (keyCode === 86) { //V
        strokeVal = 'purple';
    }
}


function windowResized() { // change la taille du canvas quand on change la taille de la fenêtre
    resizeCanvas(windowWidth, windowHeight);
    background(255); // petit bug qui fait qu'on est obligé de remettre le background
}