function store(currentStock, products) {
    let store = [];

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        let productObj = {
            product,
            quantity,
        };
        store.push(productObj);
    }

    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);

        let productObj = {
            product,
            quantity,
        };
        let indexOfProduct = store.findIndex(x => x.product === product);
        if (indexOfProduct === -1) {
            store.push(productObj);
        } else {
            store[indexOfProduct].quantity += quantity
        }
    }
    for (let product of store) {
        console.log(`${product.product} -> ${product.quantity}`)
    }

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])