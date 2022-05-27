function processOddNum(arr) {
    let arrL = arr.length;
    let newArr = [];
    for (let i = 0; i < arrL; i++) {
        if (i % 2 !== 0) {
            let newEl = arr[i] * 2;
            newArr.push(newEl);
        }
    }

    let result = [];
    for (let j = newArr.length; j >= 0; j--) {
        result.push(newArr[j])
    }
    console.log(result.join(' '))

}
processOddNum([10, 15, 20, 25])