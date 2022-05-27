function sumFirstAndLast(arr) {

    let sum = 0;
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    sum = firstElement + lastElement;
    console.log(sum)

}
sumFirstAndLast(["20", "30", "40"])