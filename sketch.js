var fixedRect, movingRect, obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(500,300,50,50);
  obj2 = createSprite(300,100,50,50);

  obj1.shapeColor = "green";
  obj2.shapeColor = "green";
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  text("creating own function",500,100);

  if(isTouching(movingRect,obj1)){
    movingRect.shapeColor = "purple";
    obj1.shapeColor = "purple";
  } else {
    movingRect.shapeColor = "green";
    obj1.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
  }
  else {
      return false;
  }

}