let pendulumLength = 300; 
let pendulumAngle = Math.PI / 3; 
let pendulumAngleVelocity = 0.03; 

let circleRadius = 100;
let circleX, circleY; 
let circleSpeed = 3; 

let squareSize = 150;
let squareX, squareY;
let squareSpeed = 5;

let triangleSize = 60;
let triangleX, triangleY;
let triangleSpeedX = 2;
let triangleSpeedY = 2;

function setup() {
  createCanvas(1920, 1080);
  circleX = width / 2;
  circleY = height / 2;
  squareX = width / 2;
  squareY = height / 2;
  triangleX = width / 2;
  triangleY = height / 2;
}

function draw() {
  background(200, 300, 150);

  // Pendulum
  let pendulumX = width / 2 + pendulumLength * Math.sin(pendulumAngle);
  let pendulumY = height / 2 + pendulumLength * Math.cos(pendulumAngle);

  line(width / 2, height / 2, pendulumX, pendulumY);
  fill(255, 165, 0);
  ellipse(pendulumX, pendulumY, 30, 30);

  // Moving Circle
  fill(255, 255, 0);
  stroke(255, 255, 255)
  strokeWeight(2)
  ellipse(circleX, circleY, circleRadius * 2, circleRadius * 2);

  pendulumAngle += pendulumAngleVelocity;

  // Moving Square
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(squareX, squareY, squareSize, squareSize);

   // Moving Triangle
   fill(0, 255, 0);
   triangle(
     triangleX, triangleY - triangleSize,
     triangleX - triangleSize / 2, triangleY + triangleSize / 2,
     triangleX + triangleSize / 2, triangleY + triangleSize / 2
   );

  if (frameCount % 60 === 0) {
    let angle = random(TWO_PI);
    let distance = random(10, 100);
    circleX += cos(angle) * distance * circleSpeed;
    circleY += sin(angle) * distance * circleSpeed;
  }

  // Square position
  squareX += squareSpeed;
  if (squareX > width + squareSize) {
    squareX = -squareSize;
  }

  // Triangle position
  triangleX += triangleSpeedX;
  triangleY += triangleSpeedY;
  if (triangleX < 0 || triangleX > width) {
    triangleSpeedX *= -1;
  }
  if (triangleY < 0 || triangleY > height) {
    triangleSpeedY *= -1;
  }

}