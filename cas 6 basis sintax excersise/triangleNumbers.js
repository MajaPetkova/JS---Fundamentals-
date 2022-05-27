function triangleOfNumbers(num) {
    let number = num;

    for (let i = 1; i <= number; i++) { //i e brojot koj go vrtime
        let output = '';
        for (let j = 1; j <= i; j++) { //j e brojot na povtoruvanje
            output += `${i} `
        }
        console.log(output)
    }

}
triangleOfNumbers(3)