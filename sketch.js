var Rect, Squar, Circl;

function setup() {
    
  createCanvas(800,400);
    
  Rect=createSprite(200,200,50,80); 
  Rect.shapeColor="green";
    
  Squar=createSprite(325,325,30,30);
  Squar.shapeColor="red";
    
  Circl=createSprite(250,250,80,30);
  Circl.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  
  drawSprites();
  }
