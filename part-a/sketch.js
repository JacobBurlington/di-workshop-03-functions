//this draws the canvas 
function setup() {
  createCanvas(900, 900)
  background(255)
}
var width;
var height;
var x;
var y;
//this draws the shape
function draw() {
  fill(255, 130, 0)
  stroke(0)
 // triangle(0, 30, 40, 0, 80, 30)
 // square(5,  30, 70)
 x = 75,
 y = 75,
 width = 100,
 height = 150
 house(x, y, width, height)
 house(x+width*1, y, width*2, height)
 house(x + 2*width*1.5, y, width*4, height)
}
//creates the shape using the parameters x, y and size, the parameter size is both width and height so that it draws a square
function square(x, y, size) {
  rect(x, y, size, size)
}

function roof(x, y, width, height) {
  triangle(x, y, x + width/2, y - height, x + width, y)
}

function house(x, y, width, height) {
  roof(x, y, width, height/2)
  rect(x, y, width, height/2)
}