
function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(175,200,400,20);
  path.addImage(pathImage);
  path.x = 200;
  path.velocityY = 4;
  path.scale=1.2;
  jaxon = createSprite(200,325,50,50);
  jaxon.addAnimation("running",jaxon_running);
  jaxon.scale=0.07;

}

function draw() {
  background(0);


 jaxon.x=World.mouseX;
 edges= createEdgeSprites();
jaxon.collide(edges);
 
  if (path.y>400){
    path.y = 200;
  }


  drawSprites();
}
