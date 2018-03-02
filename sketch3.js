//define variables
var smiley;
var fontItalic;
var xoff = 0.0;
var mySound;
var table;

//empty array
var words = []; 

//function preload: image, font, sound, words
function preload() {
    //cursor
    smiley = loadImage('images/smiley.png');
    //font
    fontItalic = loadFont('images/typewriter.ttf');
    //music
    soundFormats('mp3', 'm4a', 'ogg');
    mySound = loadSound('images/trim_Tobehappy.m4a');
    //top 50 words
    table = loadTable('happyfile/happyfre50.csv', 'csv', 'header');
}

function setup(){
    createCanvas(900, windowHeight);
    //print words and show in console
    var tableArray = table.getArray();
    print(table.getRowCount() + ' total rows in table');
    print(table.getColumnCount() + ' total columns in table')
    print(table.getColumn('name'));

    //cycle through the table
    for (var r = 0; r < table.getRowCount(); r++)
     for (var c = 0; c < table.getColumnCount(); c++){
        print(table.getString(r, c));

        //constructor(tempX, tempY, tempWidth, tempHeight, tempShade, tempSpeed, tempText){
        words[r] = new Word(random(50, 890), random(350, height-50), 500, 500, "pink", 8, tableArray[r][0]);
        console.log('got the words')
  }
}

function draw(){
    background(0);

    //cursor
    imageMode(CENTER);
    image(smiley, mouseX, mouseY); 
    //words of the lyrics in the background song
    textAlign(RIGHT);
    textFont(fontItalic);
    strokeWeight(1);
    textSize(22);
    fill(140, 109, 211); //#8c6dd3 violet 
    var s = 'We all know quite a number of people\n who have everything that it would take to be happy\n and they are not happy because they want something else \n or they want more of the same.\n And we all know people who have lots of misfortune,\n and they are deeply happy.\n They radiate happiness.\n Why? Because they are grateful.';   
    text(s, 300, 10, 600, 400);

    //text to click
    strokeWeight(3);
    fill(153, 204, 153); //lettuce green
    var t = 'Click to be happy'
    text(t, 450, 350);

    textSize(35);
    fill(253, 122, 131);

    //move words
    for (var i = 0; i < 38; i++){
        words[i].display();
        words[i].move();
    }

    //Shade images: violet
    var img = createImage(66, 66);
    img.loadPixels();
    for(var i = 0; i < img.width; i++){
        for(var j = 0; j < img.height; j++){
            img.set(i, j, color(140, 109, 211, (i % img.width) * 2));
        }
    }
    img.updatePixels();
    image(img, 20, 20);
    image(img, 140, 140);
    image(img, 260, 260);

    //Shade images: peach
    var img = createImage(66, 66);
    img.loadPixels();
    for(var i = 0; i < img.width; i++){
        for(var j = 0; j < img.height; j++){
            img.set(i, j, color(253, 122, 131, (i % img.width) * 2));
        }
    }
    img.updatePixels();
    image(img, 100, 100);
    image(img, 220, 220);

    //Shade images: lettuce green
    var img = createImage(66, 66);
    img.loadPixels();
    for(var i = 0; i < img.width; i++){
        for(var j = 0; j < img.height; j++){
            img.set(i, j, color(153, 204, 153, (i % img.width) * 2));
        }
    }
    img.updatePixels();
    image(img, 60, 60);
    image(img, 180, 180);
    image(img, 300, 300);

    //piechart
    // pieChart(100, angles);
 
    //Mouse pressed
    if(mouseIsPressed){
        //trigger sound
        mySound.play();
        mySound.setVolume(0.12);

        //smiley face
        stroke(153, 204, 153); //lettuce green
        strokeWeight(3);
        ellipseMode(CENTER);
        //change eye color
        fill(random(255), random(255), random(255));
        ellipse(100, 230, 10, 10);
        ellipse(165, 230, 10, 10);
        noFill(); 
        arc(130, 280, 100, 120, 0.2, PI - 0.2);
    }else{
        noStroke();
    }

}
//define class Word
class Word{ 
        constructor(tempX, tempY, tempWidth, tempHeight, tempShade, tempSpeed, tempText){
        this.x = tempX;
        this.y = tempY;
        this.w = tempWidth;
        this.h = tempHeight;
        this.shade = tempShade;
        this.speed = tempSpeed;
        this.text = tempText;
    }

    //display 
    display(){
        text(this.text, this.x, this.y);
    }

    move(){
    this.x += random(0,1);
    this.y += random(-45, 45);
  }
}
