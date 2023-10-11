let position, velocity,acceleration,deacceleration;
let diameter = 300;
let logo;
function preload() {
  logo = loadImage(
    "https://cdn.pixabay.com/photo/2017/08/29/16/01/ufo-2693877_1280.png"
  );
}

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, TWO_PI, 1, 1);
  imageMode(CENTER)
  position = createVector(width * 0.5, height * 0.5);
  velocity = createVector(random(-5, 5), random(-5, 5));
  acceleration = createVector(0, 0);
  deacceleration = 0.99;
}

function draw() {
    for (let x = 0; x < width; x++) {
    let thisHue = map(x, 0, width, 4,5, 4);
    stroke(thisHue, 0.3, 0.7);
    line(x, 0, x, height);
  }


  image(logo, position.x, position.y, diameter, diameter);

  velocity.add(acceleration);
  
  velocity.mult(deacceleration);

  position.add(velocity);

  if (position.x - diameter / 2 <= 0 || position.x + diameter / 2 >= width) {
    velocity.x *= -1;
  }
  if (position.y - diameter / 2 <= 0 || position.y + diameter / 2 >= width) {
    velocity.y *= -1;
  }
  acceleration = createVector(random(-0.6, 0.6), random(-0.2, 0.2));
}
