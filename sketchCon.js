//define variables
var fontItalic;
var xoff = 0.0;
var mySound;
var table;
var button;
var drops = [];
var link;
var img;

//total number of drops we want to use
var totalDrops = 0;

//function preload: image, font, sound, words
function preload() {
    //cursor
    img = loadImage('images/propic.png');
    //font
    fontItalic = loadFont('images/typewriter.ttf');
}

function setup(){
    createCanvas(windowWidth, 700);
    textAlign(CENTER);
    textFont(fontItalic);
    textSize(30);
    strokeWeight(1);
    link = createA('https://aahvs.duke.edu/people/profile/jo-kwon', 'Go To Profile', '_blank');
    //link.position(120, 350);
}

function draw(){
    background(0);
    image(img, 0, 10, img.width/3, img.height/3);

    fill(140, 109, 211); //#8c6dd3 violet 
    var s = 'Jo Joungwon Kwon\n CMAC MA Student\n in Duke University\n ';   
    text(s, windowWidth/2, 50);
    
    var t = 'jo.kwon@duke.edu\n https://aahvs.duke.edu/people/profile/jo-kwon'
    text(t, windowWidth/2, 200);

    // Initialize one drop
    drops[totalDrops] = new Drop();
    // Increment totalDrops
    totalDrops++ ;
    // If we hit the end of the array
    if (totalDrops >= 500) {
        totalDrops = 0; //Start over
    }
      // Move and display drops
  for (var i = 0; i < totalDrops; i++ ) { 
    drops[i].move();
    drops[i].display();
    drops[i].wind();
  }
}

function Drop() {
    this.r = 50;                 
    this.x = random(width);     
    this.y = -this.r*4;              
    this.speed = random(1, 7);   // Pick a random speed
    this.wind_speed = 0.3;
    this.c = color(50, 100, 150); // Color
  
    // Move the raindrop down
    this.move = function() {
      this.y += this.speed;
    }
  
    this.wind = function(){
      this.x += this.wind_speed;
    }
  
    // Display the raindrop
    this.display = function() {
      // Display the drop
      fill(this.c);
      noStroke();
      image(img, this.x, this.y, this.r*0.5, this.r*0.5);
    }
  }

