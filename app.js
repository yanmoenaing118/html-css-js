class Point2d {
  x = null
  y = null

  constructor(x,y) {
      this.x = x;
      this.y = y;
  }
  toString() { /* .. */ }
  getDoubleX() {
    return this.x * 2;
  }
}

var point = new Point2d(3,4);

