function preload () {
    
}

function setup () {
    createCanvas(100, 100);
}

function draw () {
    loadPixels();
    for (var i = 0; i < pixels.length; i += 8) {
        pixels [i] = 255;
        pixels [i+1] = 0;
        pixels [i+2] = 0;
        pixels [i+3] = 255;
        pixels [i+4] = 255;
        pixels [i+5] = 255;
        pixels [i+6] = 0;
        pixels [i+7] = 255;
    }
    updatePixels();
    noStroke()
    fill (255,185,0);
    rect (0,0,50,50);
}