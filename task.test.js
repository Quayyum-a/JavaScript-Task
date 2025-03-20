const {calculateArea, convertToFahrenheit, isEven, isLeapYear, countVowels} = require('./task.js');

test('area of a rectangle', () => {
    let width = 100;
    let height = 50;
    let result = calculateArea(width, height);
    expect(result).toBe(5000);
});

test('convert celsius to fahrenheit', ()=>{
    let celsius = 20;
    let result = convertToFahrenheit(celsius);
    expect(result).toBe(68);
})

test('number is even', ()=>{
    let number = 10;
    let result = isEven(number);
    expect(result).toBe(true);
})

test('leap year',()=>{
    let year = 2020;
    let result = isLeapYear(year);
    expect(result).toBe(true);
})

test('counting vowels in a string', ()=>{
    let string = "Hello";
    let result = countVowels(string);
    expect(result).toBe(2);
})