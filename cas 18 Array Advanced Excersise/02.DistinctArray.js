function distinctArr(arr) {
    let newArr = [];

    for (let n of arr) {
        if (!newArr.includes(n)) {
            newArr.push(n)
        }
    }
    return newArr.join(' ');
}
console.log(distinctArr([1, 2, 4, 8, 7, 2, 1]))