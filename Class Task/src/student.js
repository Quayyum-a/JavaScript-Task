function getScores(arr) {
  return arr.filter((score) => score >= 70);
}

function addScore(arr) {
  return arr.map((score) => score + 5);
}

function squareNumbers(arr) {
  return arr.map((score) => score * score);
}

function distributeBooks(members, books) {
  let result = {};
  let count = 0;
  for (let member of members) {
    result[member] = books[count];
    count++;
  }
  return result;
}

function findClass(arr) {
  return arr.filter((time) => time.includes("PM"));
}

function calculateTotal(expenses) {
  let total = 0;
  for (let key in expenses) {
    total += expenses[key];
  }
  return total;
}

function convertToLetterGrades(arr) {
  return arr.map((score) => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
  });
}

function getHealthySnacks(arr) {
  let healthyItems = arr.filter((snack) => snack.isHealthy === true);
  healthyItems.forEach((snack) => console.log(snack.name));
  return healthyItems;
}

function getOrdersAbove100(orders) {
  return orders
    .map((order) => ({
      ...order,
      total: order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    }))
    .filter((order) => order.total > 100)
    .map((order) => ({
      id: order.id,
      total: order.total,
    }));
}

function getDiscountedProducts(products) {
  const discount = 0.1;
  return products
    .filter((product) => product.price > 50)
    .map((product) => ({
      name: product.name,
      originalPrice: product.price,
      discountedPrice: product.price * (1 - discount),
    }));
}

module.exports = {
  getScores,
  addScore,
  squareNumbers,
  distributeBooks,
  findClass,
  calculateTotal,
  convertToLetterGrades,
  getHealthySnacks,
  getOrdersAbove100,
  getDiscountedProducts,
};
