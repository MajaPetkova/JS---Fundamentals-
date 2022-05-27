function signCheck(num1, num2, num3) {
    let totalNegativ = 0;
    if (isNegative(num1)) {
        totalNegativ++
    }
    if (isNegative(num2)) {
        totalNegativ++
    }
    if (isNegative(num3)) {
        totalNegativ++
    }

    if (totalNegativ % 2 === 0) {
        return "Positive"
    } else {
        return "Negative"
    }

    function isNegative(number) {
        return number < 0;
    }
}


console.log(signCheck(5, 12, -15))