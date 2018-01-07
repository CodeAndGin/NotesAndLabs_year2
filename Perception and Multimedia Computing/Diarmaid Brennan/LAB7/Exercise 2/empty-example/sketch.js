function setup () {
    createCanvas(600, 800, WEBGL);
}

function draw () {
    
    camera(-mouseX*2+width/2, -mouseY*2+height/2, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);
    push();
    translate(0, -200);
    sphere(50);
    pop();
    push();
    box(50,280,50);
    pop();
    push();
    translate(70, -100);
    rotateZ(PI/4);
    box(20,100,50);
    pop();
    push();
    translate(-70, -100);
    rotateZ(-PI/4);
    box(20,100,50);
    pop();
    push();
    translate(70, 180);
    rotateZ(PI/4);
    box(20,150,50);
    pop();
    push();
    translate(-70, 180);
    rotateZ(-PI/4);
    box(20,150,50);
    pop();
    push();
    translate (0,-250);
    cylinder(75, 10);
    translate (0, -35);
    cylinder(50, 75);
    pop();
}