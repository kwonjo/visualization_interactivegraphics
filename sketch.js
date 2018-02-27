var bubbles;
var table;
var fontItalic;

function preload(){
  table = loadTable('data/AIsearch.csv', 'header');
  fontItalic = loadFont('images/typewriter.ttf');
}

function setup(){
  createCanvas(900, 900);
  loadData();
  //print words and show in console
  var tableArray = table.getArray();
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table')
  print(table.getColumn('name'));
}

function draw(){
  background(53, 204, 153); //lettuce green
  // Display all bubbles
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].display();
  }

}

function loadData(){
  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++){
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var keyword = row.get("keyword");
    var frequency = row.get("frequency");
    var intersectionAI = row.get("intersectionAI");
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(random(10, 890), random(10, 890), keyword, frequency, intersectionAI);
  }
}

class Bubble{
  constructor(tempX, tempY, tempKeyword, tempFrequency, tempIntersectionAI){
    this.x = tempX;
    this.y = tempY;
    this.keyword = String(tempKeyword);
    this.frequency = Number(tempFrequency);
    this.intersectionAI = Number(tempIntersectionAI);
}

// Display the Bubble
display() {
    stroke(140, 109, 211);
    noFill();
    ellipse(this.x, this.y, this.frequency, this.frequency);
    textAlign(CENTER);
    text(this.keyword, this.x, this.y-20);
    text(this.frequency, this.x, this.y+20);
}

}