var balloon;
var backImage;

function preload(){

  //backImage = loadImage(sprites/_MACOSK)

}

function setup() {
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);


}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyCode === 37){
     balloon.position.x = balloon.position.x + 5
  }

  if(keyCode === 39){
    balloon.body.position.y = balloon.body.position.y - 5;
 }

 if(keyCode === 38){
  balloon.body.position.y = balloon.body.position.y - 5;
}

if(keyCode === 40){
  balloon.body.position.y = balloon.body.position.y + 5;
}


}

