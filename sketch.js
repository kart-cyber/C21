var rect1;
var rect2;
var rect3;


function setup() {
  createCanvas(800,400);
   rect1 = createSprite(400, 300, 50, 50);
   rect1.velocityX = 4;
   rect1.shapeColor = "red"

   rect2 = createSprite(300, 300, 50, 50);
   rect2.velocityX = 4;
   rect2.shapeColor = "red"

   rect3 = createSprite(600, 300, 50, 50);
   rect3.velocityX = -4;
   rect3.shapeColor = "red"


   rect1.debug = true
   rect2.debug = true
   rect3.debug = true
}

function draw() {
  background(255,255,255);  
 //bounceOff(rect1, rect3);
 if(isTouching(rect2, rect3)){
     rect2.shapeColor = color("yellow");
     rect3.shapeColor = color("pink");
  } else {
    rect2.shapeColor = color("red");
    rect3.shapeColor = color("red");

  }

  drawSprites();
}


