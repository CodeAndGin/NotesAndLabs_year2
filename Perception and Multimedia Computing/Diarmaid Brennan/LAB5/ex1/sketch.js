var frames = [];
var frame = 0;

function preload () {
    for (var i = 1; i <= 25; i++) {
        loadFrames(i);
    }
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    frameRate(27);
}

function draw () {
    frame++;
    frame = frame % 27;
    image(frames[frame], 0, 0);
}

function loadFrames(n) {
    frames[0] = loadImage("Assets/title.gif");
    frames[1] = loadImage("Assets/title2.gif");
    frames[n+1] = loadImage("Assets/K"+n+".gif");
}