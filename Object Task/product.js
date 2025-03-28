function findExpensiveProducts(products, threshold) {
    return products.filter(product => product.price > threshold).map(product => product.name);
}

module.exports = { findExpensiveProducts };