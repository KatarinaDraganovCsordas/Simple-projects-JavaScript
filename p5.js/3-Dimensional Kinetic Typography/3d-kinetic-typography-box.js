class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    let x = map(mouseX, 0, width, 0, 360);
    fill(250, 130, 180);
    push();
    translate(this.x, this.y);
    rotateX(x);
    rotateY(x);
    box(size - 1/3*size);
    pop();
  }
}
