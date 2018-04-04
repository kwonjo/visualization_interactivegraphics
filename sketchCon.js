//define variables
var fontItalic;
var xoff = 0.0;
var mySound;
var table;
var button;

//function preload: image, font, sound, words
function preload() {
    //cursor
    img = loadImage('images/propic.png');
    //font
    fontItalic = loadFont('images/typewriter.ttf');
}

function setup(){
    createCanvas(windowWidth, 700);
}

function draw(){
    background(0);
    image(img, 0, 10, img.width/2, img.height/2);
    //words of the lyrics in the background song
    textAlign(CENTER);
    textFont(fontItalic);
    strokeWeight(1);
    textSize(30);
    fill(140, 109, 211); //#8c6dd3 violet 
    var s = 'Jo Joungwon Kwon\n CMAC MA Student\n in Duke University\n ';   
    text(s, windowWidth/2, 50);
    createA('https://aahvs.duke.edu/people/profile/jo-kwon', 'this is a link');
    var t = 'jo.kwon@duke.edu\n https://aahvs.duke.edu/people/profile/jo-kwon'
    text(t, windowWidth/2, 200);
    noLoop();

}


