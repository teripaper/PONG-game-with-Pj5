//variáveis da bola
let xBola = 300;
let yBola = 200;
let diametro = 16;
let raio = diametro /2;

//variáveis da velocidade
let velocidadeXBola = 6
let velocidadeYBola = 6

//variáveis da requete
let xRaquete = -1;
let yRaquete = 150;
let widthRaquete = 10;
let heightRaquete = 90;

//variáveis do oponente
let xRaqueteOp = 586
let yRaqueteOp = 150
let velocidadeYOp;

//sons do videogame

let coin;
let pong;
let videogame;

//colisãoLibrary

let hit = false;

//chance de erro

let chanceDeErrar = 0;

//pontos

let meusPontos = 0;
let pontosOp = 0;


function setup() {
  createCanvas(600, 400);
  videogame.loop();

}

function draw() {
  background(20);
  mostrarBola();
  velocidadeBola();
  colisaoBola();
  mostraraquete(xRaquete, yRaquete);
  mostraraquete(xRaqueteOp, yRaqueteOp);
  movimentarRaquete();
  //colisaoRaquete();
  hitRaquete(xRaquete, yRaquete);
  hitRaquete(xRaqueteOp, yRaqueteOp)
  movimentaRaqueteOp();
  marcarPonto();
  mostrarPlacar();
  
  
}

function mostrarBola(){
  circle (xBola, yBola, diametro)

}

function velocidadeBola(){
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function colisaoBola(){
  if (xBola + raio > width || xBola - raio < 0){
    velocidadeXBola *= -1
  }
  if (yBola + raio > height || yBola - raio <0){
    velocidadeYBola *= -1}
}

function mostraraquete(x, y){
  rect(x ,y , widthRaquete, heightRaquete);
}

function hitRaquete(x, y){
  
hit = collideRectCircle(x, y, widthRaquete, heightRaquete, xBola, yBola, raio);
  
    if (hit){
      velocidadeXBola *= -1;
        pong.play();
  
    }
(xRaquete, yRaquete, widthRaquete, heightRaquete, xBola, yBola, raio)
}

function movimentarRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;   
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

//função desativada

function colisaoRaquete(){
  if (xBola - raio < xRaquete + widthRaquete
     && yBola - raio < yRaquete + heightRaquete
     && yBola + raio > yRaquete )
    velocidadeXBola *= -1;
}

function movimentaRaqueteOp() {
  velocidadeYOp = yBola - yRaqueteOp - widthRaquete /2 -30;
 yRaqueteOp += velocidadeYOp + chanceDeErrar
  
  calculaChanceDeErrar();

}

function mostrarPlacar(){
  textAlign (CENTER)
  textSize (16)
  stroke (255)
  fill (color(255, 140, 0));
  rect (150, 10, 40, 20);
  fill (255);
  text (meusPontos,170, 26);
  fill (color(255, 140, 0));
  rect (450, 10, 40, 20);
  fill (255);
  text (pontosOp, 470, 26);
  
}

function marcarPonto(){
  if (xBola > 590){
    meusPontos += 1;
  coin.play();
  }
  if (xBola < 10){
    pontosOp += 1;
    coin.play();
  }
}
function preload(){
    coin = loadSound ( "Coin.wav")
    pong = loadSound ( "hitSound.wav")
    videogame = loadSound ("Video Game.wav")
}

function calculaChanceDeErrar(){
  if (pontosOp >= meusPontos){
    chanceDeErrar += 1
    
  if (chanceDeErrar >= 39){
    chanceDeErrar = 40
  }
} else {
  chanceDeErrar -= 1
  if (chanceDeErrar <= 35){
    chanceDeErrar = 35
   } 
 }  
}




















