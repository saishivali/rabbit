var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leave,leaveImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png")
leaveImg = loadImage("leaves.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  if(keyDown("left")){
    rabbit.x-=3
  }
  if(keyDown("right")){
    rabbit.x+=3
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);
  createleaves()
createApples()
  drawSprites();
}
function createApples(){
  if(frameCount % 80 === 0){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.09
  apple.velocityY=3
  apple.lifetime = 100
  }
}
function createleaves(){
  if(frameCount % 80 === 0){
  leaves=createSprite(random(50,350),40,10,10)
  leaves.addImage(leaveImg)
 leaves.scale=0.05
  leaves.velocityY=3
 leaves.lifetime = 100
  }
}


  







