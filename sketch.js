//unique array of particles that behave uniquely
let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  // create new particles when mouse is pressed
  if (mouseIsPressed) {
    particles.push(new Particle(mouseX, mouseY));
  }

  // update and show all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].display();
    particles[i].move();

    // remove particles that move off screen (optional now since they bounce)
    if (particles[i].size < 1) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
    this.size = random(5, 20); // random size 
    this.index = particles.length; // Assign an index based on array placement
  }
 // based on index %2 = 0, change particle size and color
  display() {
    noStroke();

    if (this.index % 2 === 0) {
      fill(128, 50, 180); // purple
      ellipse(this.x, this.y, this.size);
    } else {
      fill(255, 215, 0); // yellow
      rect(this.x, this.y, this.size, this.size);
    }
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    //bounce off edges
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
    // shrink particles
    this.size -= 0.1;
  }
}