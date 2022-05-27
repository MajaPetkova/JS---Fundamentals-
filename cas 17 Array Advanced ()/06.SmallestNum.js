function smallestNumber(arr) {
    let resultSort = arr.sort((a, b) => {
        return a - b;
    })
    console.log(resultSort.splice(arr, 2).join(' '))
        // console.log(resultSort.join(" "))

}
smallestNumber([30, 15, 50, 5])