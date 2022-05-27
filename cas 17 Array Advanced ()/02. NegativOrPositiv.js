function negativOrPositiv(arr) {
    let arrL = arr.length;
    let newArr = [];
    for (let i = 0; i < arrL; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        console.log(newArr[j])
    }

}
negativOrPositiv
    (['7', '-2', '8', '9'])