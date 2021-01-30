const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var fairy,fairyImg;
var fairy1,fairy1Img;
var fairy2,fairy2Img;
var star,starImg;
var starnight,starnightImg;

var engine,world;

function preload()
{
   //preload the images here
  fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
  starImg = loadAnimation("images/star.png");
  starnightImg = loadAnimation("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);
  

  
  engine = Engine.create();
  world = engine.world;
  
  starnight = createSprite(400,375,800,750);
  starnight.addAnimation("sn",starnightImg); 
  starnight.scale = 0.4;
  
  
  fairy = createSprite(600,500,20,20);
  fairy.addAnimation("fy",fairyImg);
  fairy.scale = 0.2;

  starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
  World.add(world,starBody);
  
  
  
  star = createSprite(100,30,20,20);
  star.addAnimation("sd",starImg);
  star.scale = 0.2;
  
  starBody = Bodies.circle(600,100,30);
  World.add(world,starBody)

 }


function draw() {
  background("black");

  
  if(keyDown("DOWN_ARROW")){
    starBody = Bodies.circle(600,500,5,{restitution:0.5,isStatic:true});
    World.add(world,starBody)
  }
  
 




  
  if(keyDown("LEFT_ARROW")){
    fairy.x = fairy.x -4;
  }

  if(keyDown("RIGHT_ARROW")){
    fairy.x = fairy.x +4;
  }

 
    star.x = starBody.position.x
    star.y = starBody.position.y

  
  
  if(starBody.position.y > 450){
    Matter.Body.setStatic(starBody,true)
  }



 

  drawSprites();
}
