class Fruit {
  constructor() {
    this.x;
    this.y;
  }

  pickLocation() {
    this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * col - 1) + 1) * scale;
  }

  draw() {
    ctx.fillStyle = "#f59042";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
