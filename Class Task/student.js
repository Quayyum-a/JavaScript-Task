function getScores(arr) {
    return arr.filter(score => score >= 70);
}

function addScore(arr){
  return arr.map(score => score + 5);
}

function squareNumbers(arr){
  return arr.map(score => score * score);
}

function distributeBooks(members, book){
  let result = {};
  for (let count = 0; count < members.length; count++) {
    result[members[count]] = book[count];
  }
  return result;
}

function findClass(arr){
  return arr.filter(time => time.includes("PM"));
}

function calculateTotal(expenses) {
  let total = 0;
  for (let key in expenses) {
    total += expenses[key];
  }
  return total;
}

function convertToLetterGrades(arr) {
  return arr.map(score => {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 60) return 'D';
    else return 'F';
  });
}

function getHealthySnacks(arr) {
  let healthyItems = arr.filter(snack => snack.isHealthy === true);
  return healthyItems.map(snack => snack.name);
}

function getOrdersAbove100(orders) {
  return orders
    .map(order => ({...order, total: order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)}))
    .filter(order => order.total > 100)
    .map(order => ({
      id: order.id,
      total: order.total
    }));
}

function getDiscountedProducts(products) {
  const discount = 0.10; 
  return products
    .filter(product => product.price > 50)
    .map(product => ({
      name: product.name,
      originalPrice: product.price,
      discountedPrice: product.price * (1 - discount)
    }));
}

module.exports = {getScores, addScore, squareNumbers, distributeBooks, findClass, calculateTotal, convertToLetterGrades, getHealthySnacks, getOrdersAbove100, getDiscountedProducts};