var fontItalic;
var mySound;
var input, button, greeting;


function preload(){
  //font
  fontItalic = loadFont('images/typewriter.ttf');
  //music
  soundFormats('mp3', 'm4a'); 
  mySound = loadSound('sound/tiredboy.m4a');
}

function setup(){
  createCanvas(windowWidth, 1000);
  background(0);
  //sound loop on going
  mySound.loop(); 
  //button submit
  textFont(fontItalic);
  input = createInput();
  input.position(20, 200);

  button = createButton('enter');
  button.position(input.x + input.width, 200);
  button.mousePressed(greet);

  textAlign(CENTER);
  textSize(50);
}

function loaded(){
  console.log('loaded')
}

function togglePlaying(){
  if(!mySound.isPlaying()){
    mySound.play();
    mySound.setVolume(0.2);
  }else{
    mySound.pause();
  }
}

function greet() {
  var name = input.value();
  input.value('');

  for (var i=0; i<30; i++) {
    push();
    fill(random(0,255),random(0,255),random(0,255));
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}


