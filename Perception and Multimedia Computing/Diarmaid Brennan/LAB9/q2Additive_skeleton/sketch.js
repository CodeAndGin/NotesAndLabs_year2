var audio = new maximJs.maxiAudio();

//The number of sine waves to add together:
var numHarmonics = 500;//What happens when you change this?

var fundamental = 100;  //What happens when you change this?
var mySines = [];
var myFreqs = [];
var myAmp = [];

var frame = 0;


var drawValues = [];
var counter = 0;
var freq = 1000;
var amp = 1;

var isPlaying = true;

function setup()
{
    background(0); 
    createCanvas(windowWidth, windowHeight);
    
 //EDIT THIS CODE so that it adds together the harmonics to make a square wave
    for (var k = 1; k < numHarmonics+1; k++) {
        mySines[k]=new maximJs.maxiOsc();
        myFreqs[k]=TWO_PI*(2 * k - 1) * freq; //change this
        myAmp[k] = 1 / (2 * k - 1);  // and this
        print ("k=" + k + ", f=" + myFreqs[k] + ", a=" + myAmp[k]);
    } 
    
    
  audio.play = playLoop;
  audio.init();
    
  for(var i = 0; i<512; i++){
      drawValues.push(0);
  }
}

//no need to edit this
function draw()
{
    if (frame == 10){
        drawWave();
    }
    
   frame++;
}

function drawWave(){
    stroke(0);
    noFill();
    beginShape();
    for(var i = 0; i<512; i++){
        vertex(i*width/512,drawValues[i] *200 + height/2 + 100);
    }
    endShape();
}

function playLoop()
{
  var sum = 0;
  for (var i = 1; i<numHarmonics+1; i++){
        sum+= mySines[i].sinewave(myFreqs[i])*myAmp[i];
  }
    
  if (isPlaying){
    this.output = sum;
  }
  drawValues.push(this.output);
  drawValues.shift();
}

function keyPressed() 
{
  if (key == ' ') {
    isPlaying = !isPlaying;
  }
}