var canvas;
var gameState = 0;
var playerCount = 0;
var database, player, game, form;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  
  
  
}

