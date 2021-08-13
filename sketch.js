var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("bg.png");
  arrowImage = loadImage("arrow.png");
  bowImage = loadImage("bow.png");
  red_balloonImage = loadImage("red.png");
  green_balloonImage = loadImage("green.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //change the value of the random balloon to 4 
  var rand = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(rand){
    case 1:  redBalloon()
    break;
    case 2: blueBalloon()
    break;
    case 3: greenBalloon()
    break;
    case 4: pinkBalloon()
break;

  }
}
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //createSprite for the balloon 
  //addImage for the  balloon
  //add velocity to make the balloon move
  //change the scale of the balloon
  //add the lifetime of the balloon}
}
function greenBalloon() {
  //createSprite for the balloon 
  green= createSprite(0,Math.round(random(20, 370)),10,10)
  //addImage for the  balloon
  green.addImage(green_balloonImage)
  //add velocity to make the balloon move
  green.velocityX=3
  //change the scale of the balloon
green.scale=0.1
  //add the lifetime of the balloon}
  green.lifetime =150;
}

function pinkBalloon() {
  //createSprite for the balloon 
  //addImage for the  balloon
  //add velocity to make the balloon move
  //change the scale of the balloon
  //add the lifetime of the balloon}
}