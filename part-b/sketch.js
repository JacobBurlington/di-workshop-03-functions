var x = 0
var speedx = 2
var y = 0
var speedy = 2
var count = 0
var hasLost = false

function setup() {
  createCanvas(400, 300)
}

function draw() {
  background(170)

  x = x + speedx
  y = y + speedy

  if (ballShouldBounce(x)) {
    speedx = speedx * -1
    speedy = speedy * -1
  }
  ellipse(x, y, 10, 10)
  rect(375, mouseY, 20, 60)
  text("score: " + count, 50, 50)
}

function ballShouldBounce()
{
  if (hasLost == false){ 
  if (x < 0) {
    speedx = speedx * -1
  } else if (x > 375) {
    if (y > mouseY && y < mouseY + 60) {
    speedx = speedx * -1
    speedx --
    count ++

  }
  else {hasLost = true}
}
  if (y < 0) {
    speedy = speedy * -1
  } else if (y > 300) {
    speedy = speedy * -1
  }
  }
}
