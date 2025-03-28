const { getInventory, getFruitTotal } = require('./inventory');

describe('Inventory Functions', () => {
  const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
  };

  test('getInventory returns formatted string', () => {
    expect(getInventory(inventory)).toBe('apple : 10, banana : 5, orange : 8, mango : 12');
  });

  test('getFruitTotal returns correct sum', () => {
    expect(getFruitTotal(inventory)).toBe(35);
  });
});