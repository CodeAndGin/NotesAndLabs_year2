var position, dir, velocity;

function setup() {
    angleMode(RADIANS);
    createCanvas(600, 600);
    fill(0);
    position = createVector(0, 0);
    dir = createVector(0, -1);

    velocity = createVector(0.3, 70.4);
}

function draw() {
    background(255);
    translate(width / 2, height / 2);

    translate(position.x, position.y);
    position = p5.Vector.add(position, velocity); 

    //your code here
    if (velocity.cross(dir).z < 0) {
        rotate(velocity.angleBetween(dir));
    } else {
        rotate(-velocity.angleBetween(dir));
    }
    // Display the shape
    triangle(0, 0, -5, 15, 5, 15);
}