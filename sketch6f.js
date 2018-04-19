var c;
 
function setup() {
 	createCanvas(windowWidth, 900);
}
 
function draw()
{	
	// display instructions
	noStroke();
	fill(253, 122, 131);
	rect(0, 0, width, 50);
	fill(0);
    text("Press the 'R' for Peach Pink paint", 10, 15);
    text("Press the 'G' for Lettuce Green paint", 10, 30);
    text("Press the 'P' for Purple paint", 10, 45);
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(253, 122, 131);
    }
    if(key == 'g' || key == 'G')
	{
		c = color(153, 204, 153);
    }
    if(key == 'p' || key == 'P')
	{
		c = color(140, 109, 211);
	}
}