function minerTask(input) {
    let production = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let current = input[i];
        let quantity = Number(input[i + 1]);
        if (!production.has(current)) {
            production.set(current, 0)
        }
        let updateQuantity = production.get(current);
        updateQuantity += quantity;
        production.set(current, updateQuantity)
    }
    for (let item of production) {
        console.log(`${item[0]} -> ${item[1]}`)
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15'
])