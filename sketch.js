var canvas, backgroundImage;
var gameState = 0;
var sea;
var ob1Img, ob2Img, ob3Img, ob4Img;
var  obstacle1, obstacle2, obstacle3, obstacle4,ob;
var surfer1Img, surfer1,surfer2,surfers;
var player;
var playerCount;
var form;
var allPlayers;


function preload(){
  backgroundImage = loadImage("images/seaBg.jpg");
  ob1Img = loadImage("images/obstacle1-removebg-preview.png")
  ob2Img = loadImage("images/obstacle2-removebg-preview.png")
  ob3Img = loadImage("images/obstacle3-removebg-preview.png");
  ob4Img = loadImage("images/obstacle4-removebg-preview.png");
  surfer1Img = loadImage("images/Surfer-removebg-preview (1).png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  // sea = createSprite((displayWidth-20)/2,(displayHeight-30)/2);
  // sea.addImage(ob4Img)
  // sea.scale=1.5;

}


function draw(){
  background (backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  drawob();
  // if(gameState === 2){
  //   game.end();
  // }
  // drawSprites()
}
function drawob(){
  if(frameCount%80===0){
    ob=createSprite(Math.round(random(10,900)),Math.round(random(10,900)),40,40);
    ob.scale=0.5
    ob.velocityY=1;
    rand=Math.round(random(1,4))
    switch (rand) {
      case 1:
      ob.addImage(ob1Img )

        break;
        case 2:
        ob.addImage(ob2Img)

          break;

      default:
      ob.addImage(ob3Img)

    }

  }
}
