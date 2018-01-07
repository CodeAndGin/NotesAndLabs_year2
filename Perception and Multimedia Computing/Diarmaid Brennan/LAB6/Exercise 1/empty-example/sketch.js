var dot = [];

function setup() {
    createCanvas(900, 600);
    dot.push(new Dot());
}

function draw() {
    background(0);
    for (var i = 0; i < dot.length; i++) {
        dot[i].run();
    }
}

function keyTyped () {
    if (key == ' ') {
        dot.push(new Dot());
    }
}

function Dot() {
    let xVel = mouseX - width/2;
    xVel = map(xVel, -width/2, width/2, -10, 10);
    let yVel = mouseY - height/2;
    yVel = map(yVel, -height/2, height/2, -10, 10);
    this.velocity = createVector(xVel, yVel);
    this.loc = createVector(width/2, height/2);
    this.acceleration = createVector(0, 0.2);
    this.diam = 40;

    this.run = function() {
        this.draw();
        this.move();
        if (this.loc.y > height) {
            dot.splice(dot.indexOf(this), 1);
        }
    }

    this.draw = function() {
        fill(125);
        ellipse(this.loc.x, this.loc.y, this.diam, this.diam);
    }

    this.move = function() {
        this.velocity.add(this.acceleration);
        this.loc.add(this.velocity);
    }
}