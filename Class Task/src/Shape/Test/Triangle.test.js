const Triangle = require('../Triangle.js');

test('Calculate the area of a triangle', () => {
    const triangle = new Triangle(5, 10);
    expect(triangle.getArea()).toEqual(25);
});

test('Check if the triangle is equilateral', () => {
    const triangle = new Triangle(5, 5);
    expect(triangle.isEquilateral()).toBe(true);
});

test('Check if the triangle is not equilateral', () => {
    const triangle = new Triangle(5, 10);
    expect(triangle.isEquilateral()).toBe(false);
});