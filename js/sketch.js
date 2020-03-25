let strokeVal = 0; //couleur du trait
let strokeValW = 10; //taille du trait
let distribution = new Array(200); //nmb de ligne qui va apparaître
let lineTaille = 100; //taille des traits de l'outil rond
let lineTaRond = 25; //Taille du cercle au centre de l'outil rond à traits
let button;

function preload() {
    normal = loadSound('source/Wii.mp3');
    hard = loadSound('source/WiiHardstyle.mp3');
    vgr = loadSound('source/WiiVGR.mp3');
    trap = loadSound('source/WiiTRAP.mp3');
}

function setup() {
    normal.play();
    createCanvas(windowWidth, windowHeight); // variable de javascript en général, ca défini que notre canvas prendra la taille de l'écran dans le quel on l'ouvre
    background(255);
    for (let i = 0; i < distribution.length; i++) { //distribution c'est pour avoir de manière aléatoire des traits de taille différente
        distribution[i] = floor(randomGaussian(0, 1000));
    }
    textAlign(CENTER);
    choix = createSelect();
    choix.position(10, 10);
    choix.option('Normal');
    choix.option('Hardstyle');
    choix.option('VGR');
    choix.option('Trap');
    choix.option('None');
    choix.selected('Normal');
    choix.changed(mySelectEvent); //------------musique
    button = createButton('Help');
    button.position(25, 50);
    button.mousePressed(open);
    button.doubleClicked(close);
}

function open() {
    let commande = 'Up arrow = size up stroke\nDown arrow = size down stroke\n! = mode sun\nRight arrow = size up mode sun\nLeft arrow = size down mode sun\n1 = size up circle mode sun\n0 = size down circle mode sun\nBackspace = ereas\nX = clear all\n+ = darker gray level\n- = lighter gray level\nR = red\nB = blue\nG = green\nD = black\nV = purple\nC = cyan\nO = orange\nY = yellow\nP = pink';
    textSize(17);
    fill(0);
    noStroke();
    textAlign(LEFT);
    textLeading(20); // Set leading to 20
    text(commande, 100, 100);
}

function draw() {

    stroke(strokeVal); //c'est le contour des formes
    strokeWeight(strokeValW); //taille du trait
    if (keyCode === 221 && mouseIsPressed === true) { //“ ! ” c'est pour activer le cercle à trait
        translate(mouseX, mouseY, pmouseX, pmouseY);
        for (let i = 0; i < distribution.length; i++) {
            rotate(TWO_PI / distribution.length);
            stroke(strokeVal); //la couleur sera la même que celle qui est active
            strokeWeight(1); //épaisseur du trait
            let dist = abs(distribution[i]);
            line(lineTaRond, lineTaRond, lineTaille, lineTaille); //défini le point central d'ou partent les trait, si on agrandit les valeur il y aura un cercle vide au milieu
        } //dans la troisième variable si je met “dist” ca permet de faire en sorte que les traits ai des tailles différente de manière aléatoire, voir au dessus
    } else if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY); //fait la ligne basique pour le dessin
    }
    cursor('crosshair'); //change le curseur
}


function mySelectEvent() { // configuration de la musique ---------------------------------------------------------

    let choice = choix.value();

    switch (choice) {
        case 'Normal':
            if (hard.isPlaying()) {
                hard.stop();
            }
            if (trap.isPlaying()) { //pour chaque musique autre que celle qu'on veut jouer, on doit dire que si elle tourne, elle doit s'arrêter pour qu'on puisse dire à la fin qui jouera
                trap.stop();
            }
            if (vgr.isPlaying()) {
                vgr.stop(); // si on remplace stop par pause, la musique reprend là où elle en était avant qu'on change
            }
            if (!normal.isPlaying()) { // le ! c'est pour indiquer l'inverse
                normal.play();
            }

            break;
        case 'Hardstyle':
            if (vgr.isPlaying()) {
                vgr.stop();
            }
            if (trap.isPlaying()) {
                trap.stop();
            }
            if (normal.isPlaying()) {
                normal.stop();
            }
            if (!hard.isPlaying()) {
                hard.play();
            }

            break;
        case 'VGR':
            if (trap.isPlaying()) {
                trap.stop();
            }
            if (hard.isPlaying()) {
                hard.stop();
            }
            if (normal.isPlaying()) {
                normal.stop();
            }
            if (!vgr.isPlaying()) {
                vgr.play();
            }

            break;
        case 'Trap':
            if (vgr.isPlaying()) {
                vgr.stop();
            }
            if (hard.isPlaying()) {
                hard.stop();
            }
            if (normal.isPlaying()) {
                normal.stop();
            }
            if (!trap.isPlaying()) {
                trap.play();
            }

            break;
        case 'None':
            if (normal.isPlaying()) {
                normal.stop();
            }
            if (hard.isPlaying()) {
                hard.stop();
            }
            if (vgr.isPlaying()) {
                vgr.stop();
            }
            if (trap.isPlaying()) {
                trap.stop();
            }
            break;
        default:
            if (!normal.isPlaying()) {
                normal.play();
            }

    }

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

    if (keyCode === 39) { //flèche de droite
        lineTaille = lineTaille + 5;
    }
    if (keyCode === 37) { //flèche de gauche
        lineTaille = lineTaille - 5;
    }
    if (keyCode === 49) { //1
        lineTaRond = lineTaRond + 5;
    }
    if (keyCode === 48) { //0
        lineTaRond = lineTaRond - 5;
    } // touches de paramètre de l'outil rond à traits -------------------------------------

    if (keyCode === 88) { // X
        clear();
    } //------------------------------------------ supprime tout ce qu'il y a sur la page

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