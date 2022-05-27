function solve(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let type
    if (sum % 1 == 0) {
        type = "Integer"
    } else {
        type = "Float"
    }
    console.log(`${sum} - ${type}`)
}
solve(3, 10, 5.1)
solve(16, 1, 14)