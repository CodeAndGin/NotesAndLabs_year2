function Spring () {
    // Spring drawing constants for top bar
    this.springHeight = 32;
    this.left;
    this.right;
    this.maxHeight = 200;
    this.minHeight = 100;
    this.over = false;
    this.move = false;
    
    // Spring simulation constants
    this.M = 0.9; // Mass
    this.K = .6; // Spring constant
    this.D = 0.4; // Damping
    this.R = 150; // Rest position
    
    // Spring simulation variables
    this.ps = this.R; // Position
    this.vs = 0.0; // Velocity
    this.as = 0; // Acceleration
    this.f = 0; // Force
    
    
    
    this.update = function () {
        this.baseStart = width * (springs.indexOf(this) + 1) / (springs.length+1);
        // Update the spring position
        if ( !this.move ) {
            this.f = -this.K * ( this.ps - this.R ); // f=-ky
            this.as = this.f / this.M;          // Set the acceleration, f=ma == a=f/m
            this.vs = this.D * (this.vs + this.as);  // Set the velocity
            this.ps = this.ps + this.vs;        // Updated position
        }

        if (abs(this.vs) < 0.1) {
            this.vs = 0.0;
        }

        // Test if mouse if over the top bar
        if (mouseX > this.left && mouseX < this.right && mouseY > this.ps && mouseY < this.ps + this.springHeight) {
            this.over = true;
        } else {
            this.over = false;
        }

        // Set and constrain the position of top bar
        if (this.move) {
            this.ps = mouseY - this.springHeight/2;
            this.ps = constrain(this.ps, this.minHeight, this.maxHeight);
        }
    }
    
    this.draw = function () {
        // Draw base
        fill(0.2);
        var baseWidth = 0.5 * this.ps + -8;
        rect(this.baseStart - baseWidth, this.ps + this.springHeight, this.baseStart + baseWidth, height);

        // Set color and draw top bar
        if (this.over || this.move) {
            fill(255);
        } else {
            fill(204);
        }

        rect(this.left, this.ps, this.right, this.ps + this.springHeight);
    }
}

var springs = [];

function setup() {
    createCanvas(710, 400);
    rectMode(CORNERS);
    noStroke();
    for (var i = 0; i < 2; i++) {
        springs.push(new Spring());
    }
    springs[0].M = 1;
    springs[0].K = .9;
    springs[0].D = 0.9;
    springs[0].R = 125;
}

function draw() {
    background(102);
    for (var i = 0; i < springs.length; i++) {
        springs[i].left = springs[i].baseStart - 100;
        springs[i].right = springs[i].baseStart + 100;
        springs[i].update();
        springs[i].draw();
    }
}

function mousePressed() {
    for (var i = 0; i < springs.length; i++) {
        if (springs[i].over) {
            springs[i].move = true;
        }
    }
}

function mouseReleased() {
    for (var i = 0; i < springs.length; i++) {
        springs[i].move = false;
    }
}