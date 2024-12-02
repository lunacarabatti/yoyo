/* TP#Final - Comisión 3, David Bedoian
 Mantelli Julieta 94730/3 - Luna Carabatti
 Película elegida: Ratatouille
 Video explicativo: https://youtu.be/0EcsrCdOJwU
 Video de mi compañera: https://youtu.be/oB-ZL2UYpm0  
 */

var pantallaActual = 0;
var pantallasTotales = 16;
let titulos, parrafos, texto;
let fondos = [];
let musicaFondo;

function preload() {
  texto = loadStrings("assets/parrafos.txt");
  titulos = loadFont("assets/fuentes/Corben-Regular.ttf");
  parrafos = loadFont("assets/fuentes/RobotoSlab.ttf");
  botonSonido = loadImage("/assets/imgs/botonSonido.png");
  musicaFondo = loadSound("/assets/lefestin.mp3");
// assets del juego
 jugadorImg = loadImage("assets/assetsjuego/jugador.png");
  fondo = loadImage("assets/assetsjuego/fondojuego.png");
  fuentePuntos = loadFont("assets/assetsjuego/CENSCBK.ttf");
  inicio= loadImage ("assets/assetsjuego/inicio.png");

  for (let num = 0; num < pantallasTotales; num+=1) {
    fondos[num] = loadImage("/assets/imgs/img" + num + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  musicaFondo.setVolume(0.5);
  musicaFondo.loop();
  
  juego = new Juego();
}

function draw() {
  background(201, 198, 179);
  cuadritoTexto();
  todasLasPantallas();

  print("pantalla es " + pantallaActual);

  /*print("mouseX es " + mouseX);
   print("mouseY es " + mouseY);*/
  image(botonSonido, 10, 10, 70, 70);
  
  juego.actualizar();
}
function mousePressed() {
  interaccionPantallas(mouseX, mouseY);

  /* if (botonSonido == true) {
   musicaFondo.currentTime = 0;
   musicaFondo.play();
   }
   if (botonSonido == false) {
   musicaFondo.stop();
   }
   */
}
