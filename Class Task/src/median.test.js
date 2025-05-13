const{getMedian} = require('./median.js');

test('find the median of two array of numbers', () => {
  let array1 = [2, 3, 4,];
  let array2 = [1,5];
  let result = getMedian(array1, array2);
  expect(result).toEqual(3);
});

test('find the median of two array of numbers', () => {
  let array1 = [6, 7, 8, 9];
  let array2 = [1,2,3,4,5];
  let result = getMedian(array1, array2);
  expect(result).toEqual(5);
}
);

test('find the median of two array of numbers', () => {
  let array1 = [11, 2, 3, 4, 5];
  let array2 = [6, 7, 8, 9, 10];
  let result = getMedian(array1, array2);
  expect(result).toEqual(6.5);
});