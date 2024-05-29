function setup() {
  createCanvas(400, 400);
  background("white")
}

function draw() {
  background("white");
  rect(100, 100, 100, 100)
  
  if (mouseIsPressed) {
    fill("red");
  }   else {
    fill("green"); 
  }
 
}
