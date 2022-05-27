function firstAndLast(arr) {
    let k = arr[0];
    arr.shift(0);

    console.log(arr.slice(0, k).join(' '))
    console.log(arr.slice(arr.length - k).join(' '))
}

firstAndLast([2, 7, 8, 9])