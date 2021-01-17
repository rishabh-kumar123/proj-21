var bullet,wall;
var speed,weight;
var thickness


function setup() {
  createCanvas(1600,400);
   bullet= createSprite(50, 200, 50, 50);
   thickness=random(22,83);
   wall= createSprite(800, 200, thickness, 400/2);
   speed=random(231,321);
   weight=random(30,52);
   bullet.velocityX=speed;
}

function draw() {
  background("black"); 
  
if(hasColldied(bullet,wall)){

bullet.velocityX=0;
  deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(deformation>10){
  wall.shapeColor="green"
} 
 
if(deformation<10){
wall.shapeColor="red"
}
}
  drawSprites();
}
function hasColldied(lbullet,lwall){
  if(lwall.x<=lbullet.x+lbullet.width){
return true

  }else{
    return false
  }
}