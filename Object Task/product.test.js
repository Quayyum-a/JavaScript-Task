const { findExpensiveProducts } = require('./product');

describe('Product Functions', () => {
    const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 },
        { id: 3, name: 'Tablet', price: 500 },
        { id: 4, name: 'Desktop', price: 700 }
    ];

    test('finds products above 700 threshold', () => {
        expect(findExpensiveProducts(products, 700)).toEqual(['Laptop', 'Phone']);
    });

    test('finds products above 600 threshold', () => {
        expect(findExpensiveProducts(products, 600)).toEqual(['Laptop', 'Phone', 'Desktop']);
    });

    test('returns empty array when no products match', () => {
        expect(findExpensiveProducts(products, 1500)).toEqual([]);
    });
});