/*
TP Final PMIW (parte 2)
 Comisión 3 - David Bedoian
 Carabatti Luna y Mantelli Julieta
 Video explicativo:
 */

let jugador;
let imgIngredientes = [];
let juego;

function setup() {

  createCanvas(640, 480);
  jugadorImg = loadImage("data/jugador.png");
  fondo = loadImage("data/fondojuego.png");
  fuentePuntos = loadFont("data/CENSCBK.ttf");
  inicio= loadImage ("assets/inicio.png");

  for (let i = 0; i < 3; i++) {
    imgIngredientes[i] = loadImage("data/ingrediente_"+i+".png");
  }

  juego = new Juego();
}

function draw() {
  background(250);
  image(fondo, 0, 0, 640, 480);
  juego.actualizar();
}
