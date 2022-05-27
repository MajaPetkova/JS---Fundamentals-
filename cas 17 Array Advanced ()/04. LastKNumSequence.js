function lastKNumberSequence(n, k) {
    let arr = [1]
    let firstElement = 1;

    for (let i = firstElement; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let innerArr = arr.slice(startIndex, i)
        let sum = 0;
        for (let j = 0; j < innerArr.length; j++) {
            sum += innerArr[j]
        }
        arr[i] = sum
    }

    return arr.join(' ')
}

console.log(lastKNumberSequence(6, 3))