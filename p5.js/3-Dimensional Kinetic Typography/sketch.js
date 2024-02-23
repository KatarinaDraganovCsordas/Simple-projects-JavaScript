let size = 50;
let rows;
let cols;
let boxes = [];


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;

  for(let i=0; i<cols; i++) {
    boxes[i] = [];
    for(let j=0; j<rows; j++) {
      boxes[i][j] = new Box(size/2 + i*size - size*cols/2, size/2 + j*size - size*rows/2);
    }
  }
}

function draw() {
  background(220);

  let x = map(mouseX, 0, width, 0, 360);

  for(let i=0; i<cols; i++) {
    for(let j=0; j<rows; j++) {
      boxes[i][j].display();
    }
  }
} 
