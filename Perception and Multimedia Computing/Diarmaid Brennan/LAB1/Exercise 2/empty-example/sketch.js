function setup () {
    createCanvas(140, 150);
}
var toggle = false;
function draw () {
    beginShape();
    curveVertex(0,0);
    curveVertex(0,0);
    curveVertex(20,10);
    curveVertex(40,30);
    curveVertex(50,50);
    curveVertex(40,60);
    curveVertex(30,65);
    curveVertex(40,70);
    curveVertex(40,70);
    curveVertex(30,80);
    curveVertex(30,80);
    curveVertex(40,85);
    curveVertex(40,85);
    curveVertex(30,90);
    curveVertex(30,90);
    curveVertex(40,100);
    curveVertex(50,110);
    curveVertex(40,120);
    curveVertex(30,130);
    curveVertex(10,140);
    curveVertex(0,150);
    curveVertex(0,150);
    curveVertex(0,0);
    endShape();
    beginShape();
    curveVertex(width-0,0);
    curveVertex(width-0,0);
    curveVertex(width-20,10);
    curveVertex(width-40,30);
    curveVertex(width-50,50);
    curveVertex(width-40,60);
    curveVertex(width-30,65);
    curveVertex(width-40,70);
    curveVertex(width-40,70);
    curveVertex(width-30,80);
    curveVertex(width-30,80);
    curveVertex(width-40,85);
    curveVertex(width-40,85);
    curveVertex(width-30,90);
    curveVertex(width-30,90);
    curveVertex(width-40,100);
    curveVertex(width-50,110);
    curveVertex(width-40,120);
    curveVertex(width-30,130);
    curveVertex(width-10,140);
    curveVertex(width-0,150);
    curveVertex(width-0,150);
    curveVertex(width-0,0);
    endShape();
}

function keyPressed () {
    toggle = !toggle;
    if (toggle) {
        fill(0,50,0);
        background(255);
        document.getElementById("disamb").innerHTML = "VASE"
    }
    if (!toggle) {
        background(0,50,0);
        fill(255);
        document.getElementById("disamb").innerHTML = "KISSING"
    }
}