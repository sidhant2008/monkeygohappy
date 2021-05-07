
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0 
var bg,bgImage;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 bgImage = loadImage("jungle.jpg");
  
  
}

function setup() {
  
   bg = createSprite(200,200,400,400);
  bg.addImage(bgImage);
  
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
   ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  ground.visible = false; 
  
  bananaGroup=createGroup();
   obstacleGroup=createGroup();
  
 
  
}


function draw() {
background("white");
  bg.velocityX = -3;
  if(bg.x<0){
    bg.x = bg.width/2;
    
  }
 // score = score + Math.round(getFrameRate()/60);
 
  
  if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -14; 
         
    }
  if(ground.x<0){
    ground.x = ground.width/2;
    
  }
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);  
   spawnbanana();
  spawnobstacle();
  if(bananaGroup.isTouching(monkey)){
    bananaGroup[0].destroy();
    score = score+2;
    
  }
  switch(score){
    case 10:monkey.scale = 0.12;
      break;
      case 20:monkey.scale = 0.14;
      break;
      case 30:monkey.scale = 0.16;
      break;
      case 40:monkey.scale = 0.18;
      break;
      default:break;
  }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
    obstacleGroup[0].destroy();
    score = 0;
    
    
  }
  drawSprites();
   textSize(20);
  text("score "+ score,300,50);
}

function spawnbanana(){
  if(frameCount%100===0){
  var banana = createSprite(420,Math.round(random(200,300)),20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  bananaGroup.add(banana);
  
  }  
  
  
}
function spawnobstacle(){
  if(frameCount%140===0){
  var obstacle = createSprite(420,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX = -3;
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
  
  }  
  
  
}


