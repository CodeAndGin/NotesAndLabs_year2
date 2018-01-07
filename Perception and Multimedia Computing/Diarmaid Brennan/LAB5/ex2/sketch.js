var frames = [];
var frame = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);
    inBetweenFrames ();
}

function draw () {
    frame++;
    frame = frame % frames.length;
    background(255);
    push();
    noFill();
    ellipse (200, 100, 20, 20);
    ellipse (100, 200, 20, 20);
    ellipse (300, 200, 20, 20);
    pop();
    push();
    fill(0,255,0);
    ellipse(frames[frame][0], frames[frame][1], 20, 20);
    pop();
        
}

function inBetweenFrames () {
    for (let i = 0; i < 30; i++) {
        frames.push([lerp(200, 300, i/30), lerp(100, 200, i/30)]);
    }
    for (let i = 0; i < 60; i++) {
        frames.push([lerp(300, 100, i/60), lerp(200, 200, i/60)]);
    }
    for (let i = 0; i < 90; i++) {
        frames.push([lerp(100, 200, i/90), lerp(200, 100, i/90)]);
    }
}