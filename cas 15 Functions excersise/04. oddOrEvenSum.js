function oddOrEvenSum(input) {
    let inputAsString = input.toString();
    let inputL = inputAsString.length;

    let takeOddSum = function(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < inputL; i++) {
            let currentEl = Number(numAsString[i]);
            if (currentEl % 2 !== 0) {
                oddSum += currentEl;
            }
        }
        return oddSum

    }
    let takeEvenSum = (numAsString) => {
        let evenSum = 0;
        for (let i = 0; i < inputL; i++) {
            let currentEl = Number(numAsString[i]);
            if (currentEl % 2 === 0) {
                evenSum += currentEl;
            }
        }
        return evenSum;
    }

    console.log(`Odd sum = ${takeOddSum(inputAsString)}, Even sum = ${takeEvenSum(inputAsString)}`)
}
oddOrEvenSum(1000435)