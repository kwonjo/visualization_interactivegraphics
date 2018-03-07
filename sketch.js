var fontItalic;
var mySound;
var button2;
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
  //buttonSound
  button2 = createButton('play');
  button2.position(windowWidth-70, 110);
  button2.mousePressed(togglePlaying);
  //button submit
  textFont(fontItalic);
  input = createInput();
  input.position(20, 180);

  button = createButton('submit');
  button.position(input.x + input.width, 180);
  button.mousePressed(greet);

 // greeting = createElement('h2', 'Give a definition (a statement expressing the essential nature of something) of yourself:');
  //greeting.position(20, 120);

  textAlign(CENTER);
  textSize(50);
}

function loaded(){
  console.log('loaded')
}

function togglePlaying(){
  if(!mySound.isPlaying()){
    mySound.play();
    mySound.setVolume(0.3);
    button2.html('pause')
  }else{
    mySound.pause();
    button2.html('play');
  }
}

function greet() {
  var name = input.value();
  greeting.html('You are '+name+'!');
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
