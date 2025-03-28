function getInventory(inventory) {
  return Object.entries(inventory).map(([item, count]) => `${item} : ${count}`).join(', ');
}

function getFruitTotal(inventory) {
  return Object.values(inventory).reduce((total, count) => total + count, 0);
}

module.exports = { getInventory, getFruitTotal };