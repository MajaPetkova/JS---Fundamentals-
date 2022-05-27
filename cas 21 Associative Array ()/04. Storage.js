function solve(input) {
    let storage = new Map();
    for (let line of input) {
        //parse input
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        //check for existing values
        if (storage.has(product)) {
            quantity += storage.get(product)
                // let existing = storage.get(product);
                // storage.set(product, existing + quantity)
        }
        // else {
        storage.set(product, quantity)
            // }
            //store data
    }
    //print result
    for (let [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`)
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])