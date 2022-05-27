function printResult(firstN, secondN, thirdN) {
    function sumOfTwoNum(a, b) {
        return a + b;
    }
    // let sum= (a,b)=>a+b;
    let sum = sumOfTwoNum(firstN, secondN)

    function subtract(c, d) {
        return c - d;
    }
    // let subtract = (c, d) => c - d;
    let finalResult = subtract(sum, thirdN)
    console.log(finalResult)
}
printResult(23, 6, 10)