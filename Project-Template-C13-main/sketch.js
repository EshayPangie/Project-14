var blueBalloonGroup;
var greenBalloonGroup;
var pinkBalloonGroup;
var redBalloonGroup;
var arrowGroup;
var arrow_sprite;
var balloon_sprite;
var bow_sprite, arrow, scene;
var pink_balloon;
var red_balloon;
var green_balloon;
var blue_balloon;
var bowImage,
  arrowImage,
  green_balloonImage,
  red_balloonImage,
  pink_balloonImage,
  blue_balloonImage,
  backgroundImage;

var score = 0;

function preload() {
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}

function setup() {
  createCanvas(400, 400);

  blueBalloonGroup = createGroup();
  greenBalloonGroup = createGroup();
  pinkBalloonGroup = createGroup();
  redBalloonGroup = createGroup();
  arrowGroup = createGroup();

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  bow_sprite = createSprite(370, 200, 20, 20);
  bow_sprite.addImage("bow", bowImage);

  score = 0;
}

function draw() {
  background(0);

  // generateBalloons();
  generatePinkBalloons();
  generateBlueBalloons();
  generateRedBalloons();
  generateGreenBalloons();

  // destroyBalloons();
  if (arrowGroup.isTouching(pinkBalloonGroup)) {
    arrowGroup.destroy;
    pinkBalloonGroup.destroyEach();
    score = score +1
  }

  if (arrowGroup.isTouching(blueBalloonGroup)) {
    arrowGroup.destroy;
    blueBalloonGroup.destroyEach();
    score = score +1
  }

  if (arrowGroup.isTouching(greenBalloonGroup)) {
    arrowGroup.destroy;
    greenBalloonGroup.destroyEach();
    score = score +1
  }

  if (arrowGroup.isTouching(redBalloonGroup)) {
    arrowGroup.destroy;
    redBalloonGroup.destroyEach();
    score = score +1
  }

  scene.velocityX = -3;
  bow_sprite.y = World.mouseY;

  if (keyDown("space")) {
    generateArrows();
  }

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  drawSprites();
  text("Score: " + score, 300, 50);
}

function generateArrows() {
  arrow_sprite = createSprite(350, bow_sprite.y, 15, 15);
  arrow_sprite.addImage("arrow", arrowImage);
  arrow_sprite.velocityX = -0.9;
  arrow_sprite.velocityX = arrow_sprite.velocityX - 1;
  arrow_sprite.scale = 0.3;
  arrow_sprite.lifetime = 190;
  arrowGroup.add(arrow_sprite);
}

function generatePinkBalloons() {
  if (frameCount % 70 == 0) {
    pink_balloon = createSprite(30, 200, 15, 15);
    pink_balloon.addImage("balloon", pink_balloonImage);
    pink_balloon.x = Math.round(random(0, 10));
    pink_balloon.y = Math.round(random(0, 300));
    pink_balloon.scale = 1.2;
    pink_balloon.velocityX = 3;
    pink_balloon.lifetime = 130;
    pinkBalloonGroup.add(pink_balloon);
  }
}

function generateBlueBalloons() {
  if (frameCount % 80 == 0) {
    blue_balloon = createSprite(30, 300, 15, 15);
    blue_balloon.addImage("balloon", blue_balloonImage);
    blue_balloon.x = Math.round(random(0, 15));
    blue_balloon.y = Math.round(random(5, 360));
    blue_balloon.scale = 0.1;
    blue_balloon.velocityX = 3;
    blue_balloon.lifetime = 130;
    blueBalloonGroup.add(blue_balloon);
  }
}

function generateRedBalloons() {
  if (frameCount % 90 == 0) {
    red_balloon = createSprite(30, 300, 15, 15);
    red_balloon.addImage("balloon", red_balloonImage);
    red_balloon.x = Math.round(random(0, 20));
    red_balloon.y = Math.round(random(10, 320));
    red_balloon.scale = 0.1;
    red_balloon.velocityX = 3;
    red_balloon.lifetime = 130;
    redBalloonGroup.add(red_balloon);
  }
}

function generateGreenBalloons() {
  if (frameCount % 60 == 0) {
    green_balloon = createSprite(30, 300, 15, 15);
    green_balloon.addImage("balloon", green_balloonImage);
    green_balloon.x = Math.round(random(0, 30));
    green_balloon.y = Math.round(random(20, 360));
    green_balloon.scale = 0.1;
    green_balloon.velocityX = 3;
    green_balloon.lifetime = 130;
    greenBalloonGroup.add(green_balloon);
  }
}

// function generateBalloons() {
//   if (frameCount % 50 == 0) {
//     balloon_sprite = createSprite(10, 160, 15, 15);
//     balloon_sprite.velocityX = 4;
//     var balloon = Math.round(random(1, 3));
//     balloon_sprite.scale = 0.1;
//     balloon_sprite.y = Math.round(random(10, 350));
//   }
//   switch (balloon) {
//     case 1:
//       balloon_sprite.addImage("balloon1", blue_balloonImage);
//       break;
//     case 2:
//       balloon_sprite.addImage("balloon2", red_balloonImage);
//       break;
//     case 3:
//       balloon_sprite.addImage("balloon3", green_balloonImage);
//       break;
//   }
//  redBalloonGroup.add(balloon)
// greenBalloonGroup.add(balloon)
// blueBalloonGroup.add(balloon)
// }
