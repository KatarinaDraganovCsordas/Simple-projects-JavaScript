let flowers = [];
let num = 15;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  for(let i=0; i<num; i++) {
    if(i%2 == 0) {
      flowers[i] = new Flower(140 - i*10, 100, 15, 7, (i+1)*0.1);
    } else {
      flowers[i] = new Flower(140 - i*10, 100, 15, 7, (i+1)*-0.01);
    }
  }
}

function draw() {
  background(0,255,0);
  translate(width/2, height/2);
  for(let i=0; i<num; i++) {
    flowers[i].display();
  }
}
