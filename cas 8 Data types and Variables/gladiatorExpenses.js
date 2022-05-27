function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let price = 0;
    for (currentFight = 1; currentFight <= lostFights; currentFight++) {
        if (currentFight % 2 === 0) {
            price += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            price += swordPrice;
        }
        if (currentFight % 6 === 0) {
            price += shieldPrice;
        }
        if (currentFight % 12 === 0) {
            price += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5)