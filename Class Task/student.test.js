const{getScores, addScore, squareNumbers, distributeBooks, findClass, calculateTotal, convertToLetterGrades, getHealthySnacks, getOrdersAbove100, getDiscountedProducts} = require('./student.js');

test('get scores of student above 70', () => {
 let testScores = [87,54,74,42,43,79,90,32,65,98];
 let result = getScores(testScores);
  expect(result).toEqual([87, 74, 79, 90, 98]);
});

test('add 5 points to each score', () => {
  let testScores = [85,92,78,88,95];
  let result = addScore(testScores);
  expect(result).toEqual([90, 97, 83, 93, 100]);
});

test('find the square of each number', () => {
let numbers = [2,4,6,8,10];
let result = squareNumbers(numbers);
expect(result).toEqual([4,16,36,64,100]);
});

test('distribute a different book to each member', () =>{
let members = ["Emily", "Jack", "Sophia", "Daniel"];
let books = ["Book A", "Book B", "Book C", "Book D"];
let result = distributeBooks(members, books);
expect(result).toEqual(
  {"Daniel": "Book D", 
    "Emily": "Book A", 
    "Jack": "Book B", 
    "Sophia": "Book C"}
);
});

test('find all classes in the afternoon', () =>{
  let timings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
  let result = findClass(timings);
  expect(result).toEqual(["1:00 PM", "3:00 PM", "5:00 PM"]);
});

test('calculate total amount spent on all categories', () =>{
  let expenses = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
  };
  let total = calculateTotal(expenses);
  expect(total).toEqual(380);
});

test('convert scores to letter based grades', () => {
  let scores = [95, 78, 85, 60, 45, 92];
  let result = convertToLetterGrades(scores);
  expect(result).toEqual(['A', 'C', 'B', 'D', 'F', 'A']);
});

test('filter unhealthy snacks', () => {
  const shoppingList = [
      { name: 'Apples', category: 'Fruits', isHealthy: true },
      { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
      { name: 'Carrots', category: 'Vegetables', isHealthy: true },
      { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
      { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
      { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    let result = getHealthySnacks(shoppingList);
    expect(result).toEqual(["Apples", "Carrots", "Greek Yogurt"]);

});

test('get items that total cost is above 100', () => {
  const orders = [
    { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
    { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
    { id: 3, items: [{ price: 30, quantity: 1 }] },
  ];
  
  let result = getOrdersAbove100(orders);
  expect(result).toEqual([
    { id: 2, total: 150 } 
  ]);
});

test('add 10% to items that their price is over 50', () => {
  const products = [ 
		{ name: "Laptop", price: 1200 }, 
		{ name: "Phone", price: 600 },
	 	{ name: "Mouse", price: 25 }, 
		{ name: "Monitor", price: 200 } 
	      ];

    let result = getDiscountedProducts(products);
    expect(result).toEqual([
      { name: "Laptop", originalPrice: 1200, discountedPrice: 1080 },
      { name: "Phone", originalPrice: 600, discountedPrice: 540 },
      { name: "Monitor", originalPrice: 200, discountedPrice: 180 }
    ]);
});