function calcultae(product, quantity) {
    let total = 0;
    let coffeeSum = () => quantity * 1.50;
    switch (product) {
        case "coffee":
            total = coffeeSum();
            break;
        case "coke":
            total = quantity * 1.40
            break;
        case "water":
            total = quantity * 1;
            break;
        case "snacks":
            total = quantity * 2;
            break;
    }
    console.log(total.toFixed(2))
}
calcultae("water", 5)