var person;
var ground;
var backgroundImage,groundImage,personImage;
var enemiesGroup,enemyImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;

function preload(){
  
  backgroundImage = loadImage("road 2.jpg");
  groundImage = loadImage("Start.jpg");
  personImage = loadImage("hero.png");
  enemyImage  = loadImage("theif.png");
}

function setup() {
  createCanvas(400,400);

  //creating background
  background = createSprite(200,350,20,50);
  background.addImage(backgroundImage);
  background.scale = 0.8;

  enemiesGroup = new Group();

  score = 0;
}

function draw() {
  text("Score: "+ score, 500,50);
  if (gameState===PLAY){

  }
  else if (gameState === END) {

  }
  score = score + Math.round(getFrameRate()/60);
 // moving ground
 background.velocityY = 3 

 if (background.y < 0){
   background.y = background.height/2;
 }
   //creating ground
   ground = createSprite(10,400,1000,0);
   ground.addImage(groundImage);
   ground.scale= 0.4;
  //creating Person
  person= createSprite(230,350,20,50);
   person.addImage(personImage);
   person.scale= 0.2;

   var enemy = createSprite(600,120,40,10);
   enemy.addImage(enemyImage);

   if(keyDown("UP_ARROW")){
    person.velocityX=0;
 person.velocityY=-4;
    }
 if(keyDown("DOWN_ARROW")){
  person.velocityX=0;
    person.velocityY=4;
    }
 if(keyDown("LEFT_ARROW")){
  person.velocityX=-4;
  person.velocityY=0;
    }
 if(keyDown("RIGHT_ARROW")){
  person.velocityX=4;
  person.velocityY=0;
    }

    
  drawSprites();
}
function spawnEnemy() {
  //write code here to spawn the enemy
  if (frameCount % 60 === 0) {
    var enemy = createSprite(600,120,40,10);
    enemy.y = Math.round(random(80,120));
    enemy.addImage(enemyImage);
    enemy.velocityY = 3;
    
     //assign lifetime to the variable
    enemy.lifetime = 200;
    
    //add each cloud to the group
    enemiesGroup.add(enemy);
  }
  
}