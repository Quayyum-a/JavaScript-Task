const Rectangle = require('../Rectangle.js');

test('Calculate the area of a rectangle', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.getArea()).toEqual(50);
});

test('Check if the rectangle is squarish', () => {
    const rectangle = new Rectangle(5, 5);
    expect(rectangle.isSquare()).toBe(true);
});
test('Check if the rectangle is not squarish', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.isSquare()).toBe(false);
});