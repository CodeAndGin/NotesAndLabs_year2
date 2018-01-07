var a, b, c;

function setup () {
    a = createVector(12, 230, 320);
    b = createVector(200, 100, 500);
    c = b.cross(a);
    createCanvas(600, 800, WEBGL);
}

function draw () {
    strokeWeight(3);
    stroke(255,0,0);
    line(a.x, a.y, a.z, 0, 0, 0);
    stroke(0,255,0);
    line(b.x, b.y, b.z, 0, 0, 0);
    stroke(0,0,255);
    line(c.x,c.y,c.z, 0, 0, 0);
}