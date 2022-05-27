function palindrom(input) {
    let arrayOfNumbers = input;
    let inputL = arrayOfNumbers.length;
    let isPalindrom = (num) => { //123 
        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join('')); // console.log(num)
        if (startNum === reversedNum) {
            return 'true';
        } else {
            return 'false'
        }
    }

    for (let i = 0; i < inputL; i++) {
        let currentNum = arrayOfNumbers[i];
        console.log(isPalindrom(currentNum))
    }
}
palindrom([123, 323, 421, 121])