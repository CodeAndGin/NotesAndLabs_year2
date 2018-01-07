var rot = 0;
var x = 1;

function setup ()
{
	createCanvas(500, 500);
    strokeCap(SQUARE);
    
}

function draw ()
{
    rot += TAU/x;
    push ();
    
    translate(width/2, height/2);
    rotate(rot);
    
    push ();
    
    fill(255);
    ellipse(0, 0, 300, 300);
    
    push ();
    
    fill(0)
    arc(0, 0, 300, 300, 0, QUARTER_PI);
    arc(0, 0, 300, 300, HALF_PI, HALF_PI + QUARTER_PI);
    arc(0, 0, 300, 300, PI, PI + QUARTER_PI);
    arc(0, 0, 300, 300, PI + HALF_PI, PI + HALF_PI + QUARTER_PI);
    
    push ();
    
    noFill();
    strokeWeight(10);
    arc(0, 0, 200, 200, HALF_PI + QUARTER_PI-0.1, HALF_PI + QUARTER_PI + QUARTER_PI/2);
    arc(0, 0, 200, 200, QUARTER_PI-0.1, QUARTER_PI + QUARTER_PI/2);
    arc(0, 0, 200, 200, PI + QUARTER_PI-0.1, PI + QUARTER_PI + QUARTER_PI/2);
    arc(0, 0, 200, 200, PI + HALF_PI + QUARTER_PI-0.1, PI + HALF_PI + QUARTER_PI + QUARTER_PI/2);
    
    arc(0, 0, 100, 100, HALF_PI + QUARTER_PI + QUARTER_PI/2, PI + 0.1);
    arc(0, 0, 100, 100, PI + QUARTER_PI + QUARTER_PI/2, PI + HALF_PI + 0.1);
    arc(0, 0, 100, 100, PI + + HALF_PI + QUARTER_PI + QUARTER_PI/2, 0.1);
    arc(0, 0, 100, 100, QUARTER_PI + QUARTER_PI/2, HALF_PI + 0.1);
    
    pop ();
    
    pop ();
    
    pop ();
    
    pop ();
}

function keyPressed ()
{
    
    if (keyCode === UP_ARROW) {
        x++;
        console.log(x);
    }
    if (keyCode === DOWN_ARROW && x > 4) {
        x--;
        console.log(x);
    }
}