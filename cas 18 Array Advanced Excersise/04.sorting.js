function sorting(arr) {
    // let newArray = [];
    // let arrL = arr.length;

    // for (let i = 0; i < arrL; i++) {
    //     let number;
    //     if (i % 2 === 0) {
    //         number = Math.max(...arr)
    //     } else {
    //         number = Math.min(...arr)
    //     }
    //     newArray.push(number);
    //     arr.splice(arr.indexOf(number), 1)
    // }
    // console.log(newArray.join(' '))

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    })
    let newArr = [];
    while (sortedArr.length != 0) {
        let biggerEl = sortedArr.pop();
        let smallerEl = sortedArr.shift();
        newArr.push(biggerEl);
        newArr.push(smallerEl);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);