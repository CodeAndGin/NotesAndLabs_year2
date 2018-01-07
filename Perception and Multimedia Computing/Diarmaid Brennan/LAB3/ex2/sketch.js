var img;
var pg;

function preload () {
    img = loadImage("test.png");
}

function setup () {
    createCanvas(img.width*2, img.height);
    pg = createGraphics(img.width*2, img.height);
    
}

function draw () {
    image(img,0,0,width/2,height);
    loadPixels();
    pg.loadPixels();
    for (var i = 0; i < pixels.length; i+=4) {
        var r = red(pixels[i]);
        var g = green(pixels[i+1]);
        var b = blue(pixels[i+2]);
        var y = 0.2126 * r + 0.7152 * g + 0.0722 * b
        pixels[i]=255-r;
        pixels[i+1]=255-g;
        pixels[i+2]=255-b;
        pg.pixels[i]=y;
        pg.pixels[i+1]=y;
        pg.pixels[i+2]=y;
        pg.pixels[i+3]=255;
    }
    updatePixels();
    pg.updatePixels();
    image(pg, img.width, 0);
}