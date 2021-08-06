
var cheethaImg, cheetha, groundImg, ground, log, logImg;



function preload(){

cheetha_running=loadAnimation("cheethaanimation.png");
cheetha_jumping = loadImage("jumping.jpg","landing.jpg")
groundImg=loadImage("ground.jpg");

logImg=loadImage("log.jpg");

}

function setup() {
 createCanvas(400,400);
 cheetha = createSprite(100,380,20,20);
 cheetha.addAnimation("cheetha",cheetha_running);
 cheetha.scale= 0.5;
 ground = createSprite(200,395,400,10);
 ground.addImage(groundImg);
 ground.scale= 0.5;
 ground.velocityX = 1.5;
 log = createSprite(Math.round(random(10,390)),380,20,20);
 log.addImage(logImg);
 log.scale = 0.5;
 log.velocityX = 1.5;
}

function draw() {
 background(255,255,255);

 if(ground.x<400){
     ground.x= ground.width/2
 }


if(cheetha.isTouching(log)){
    ground.velocityX = 0;
    cheetha.destroy();
    log.destroy();
}

if(keyDown("UP_ARROW")){
    cheetha.changeAnimation("cheetha1",cheetha_jumping);
}
 drawSprites();
}