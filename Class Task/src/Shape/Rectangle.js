const Shape = require('./Shape.js');
class Rectangle extends Shape {
  constructor(side1, side2 ) {
    super('Rectangle');
    this.side1 = side1;
    this.side2 = side2;
  }
  getArea() {
    return this.side1 * this.side2;
  }
  isSquare() {
    return this.side1 === this.side2;
  }
}
module.exports = Rectangle;