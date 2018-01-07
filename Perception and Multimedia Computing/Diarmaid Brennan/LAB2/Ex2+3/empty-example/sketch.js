//var words = ["ONE", "TWO", "THREE"];
var words = ["RED", "GREEN", "BLUE", "BLACK"];
var grid = [[], [], [], []];

function setup ()
{
	createCanvas(500, 500);
    strokeCap(SQUARE);
    background("white");
    textSize(20);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            grid[i][j] = random(words);
            push ();
            fill(random(["red", "green", "blue", "black"]))
            text (grid[i][j], i * 100, j* 100);
            pop();
        }
    }
}

function draw () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
//            push ();
//            fill(random(["red", "green", "blue", "black"]))
//            text (grid[i][j], i * 100, j* 100);
//            pop();
        }
    }    
}

function keyPressed ()
{
    background("white");
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            grid[i][j] = random(words);
            push ();
            fill(random(["red", "green", "blue", "black"]))
            text (grid[i][j], i * 100, j* 100);
            pop();
        }
    } 
}

//TAKES RGB VALUES AS ARGS AND OUTPUTS AN ARRAY WITH THE EQUIVALENT HSB VALUES

function rgb2hsb (r, g, b) {
    var mini = min([r, g, b]);
    var maxi = max([r, g, b]);
    var h;
    var s = 0;
    var b;
    
    if (maxi == mini) {
        h = 0
    } else if (maxi == r) {
        h = ceil((modulo(((PI/3)*((g-b)/(maxi-mini))), TAU)/TAU)*360);
    } else if (maxi == g) {
        h = ceil((TAU/3 + PI/3*(b-r)/(maxi-mini))/TAU*360);
    } else if (maxi == b) {
        h = ceil((2*TAU)/3 + PI/3*(r-g)/(maxi-mini)/TAU*360);
    }
    
    if (maxi == 0) {
        s = 0;
    } else if (maxi > 0){
        s = ceil((1 - mini/maxi)*100);
    }
    
    b = ceil(map(maxi, 0, 255, 0, 100));
    return [h, s, b];    
}

//TAKES HSB VALUES AS ARGS AND OUTPUTS AN ARRAY WITH THE EQUIVALENT RGB VALUES

function hsb2rgb (h, s, b) {
    
    //NORMALISE HSB
    h = h/360*TAU;
    s = s/100;
    b = b/100;
    
    var i = floor(3*h/PI);
    var f = 3*h/PI - i
    var p = b * (1 - s);
    var q = b * (1 - f * s);
    var t = b * (1 - (1 - f) * s);
    
    var r, g, bl;
    
    
    //SET RGB VALUES
    switch (i) {
        default:
            break;
        
        case 0:
            r = b;
            g = t;
            bl = p;
            break;
            
        case 1:
            r = q;
            g = b;
            bl = p;
            break;
            
        case 2:
            r = p;
            g = b;
            bl = t;
            break;
            
        case 3:
            r = p;
            g = q;
            bl = b;
            break;
            
        case 4:
            r = t;
            g = p;
            bl = b;
            break;
            
        case 5:
            r = b;
            g = p;
            bl = q;  
            break;
    }
    
    
    //NORMALISE RGB
    r = ceil(map (r, 0, 1, 0, 255));
    g = ceil (map (g, 0, 1, 0, 255));
    bl = ceil (map (bl, 0, 1, 0, 255));
    
    
    return [r, g, bl];
            
} 

//WROTE A MODULO FUNCTION TO DEAL WITH THE PROBLEMS WITH "X % -Y"

function modulo(input, mod) {
    if (input >= 0) {
        return input % mod; 
    } else if (input < 0) {
        var x = -1;
        while (x < 0) {
            x = mod + input;
            input = x;
        }
        return x;
    }
}