const {
  convertFromBaseToBase,
  isPerfectSquare,
} = require("../src/converter.js");

test("convert from base 2 to base 10", () => {
  let number = "1010";
  let fromBase = 2;
  let toBase = 10;
  let result = convertFromBaseToBase(number, fromBase, toBase);
  expect(result).toEqual("10");
});

test("convert from base 8 to base 10", () => {
  let number = "1056";
  let fromBase = 8;
  let toBase = 10;
  let result = convertFromBaseToBase(number, fromBase, toBase);
  expect(result).toEqual("558");
});

test("convert from base 2 to base 3", () => {
  let number = "110";
  let fromBase = 2;
  let toBase = 3;
  let result = convertFromBaseToBase(number, fromBase, toBase);
  expect(result).toEqual("20");
});

test("check if it is a perfect square", () => {
  let array = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ];
  let result = isPerfectSquare(array);
  expect(result).toEqual(true);
});

test("check if it is another perfect square", () => {
  let array = [
    [8, 5, 3],
    [3, 6, 7],
    [4, 3, 9],
  ];
  let result = isPerfectSquare(array);
  expect(result).toEqual(false);
});
