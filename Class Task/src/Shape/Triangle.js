const Shape = require('./Shape.js');
class Triangle extends Shape {
  constructor(base, height) {
    super('Triangle');
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
  isEquilateral() {
    return this.base === this.height;
  }
} 
module.exports = Triangle;