var a,b;

function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b=createSprite(200,100,90,90);
 a.shapeColor="green";
 b.shapeColor="green";
}

function draw() {
  background("white"); 
  a.x=World.mouseX;
  a.y=World.mouseY;
  console.log(a.x-b.x) ;
  if(a.x-b.x<=a.width/2+b.width/2 && b.x-a.x <=a.width/2+b.width/2){
    a.shapeColor="blue";
    b.shapeColor="black";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green"; 
  }
  drawSprites();
}