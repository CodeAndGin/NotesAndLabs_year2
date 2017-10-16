function setup () {
    createCanvas(1000,480);
}

function draw () {
    fill(0);
    rectMode(CENTER);
    ellipse(4*width/5, height/2, 30, 30);
    rect (width/5, height/2, 20, 400);
    fill (0,0,255);
    rect (width/5, height/2, 50, 50);
}