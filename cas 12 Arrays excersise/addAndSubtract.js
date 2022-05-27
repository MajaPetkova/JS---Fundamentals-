function addAndSubstract(array) {
    let firstSum = 0;
    for (let element of array) {
        firstSum += element;
    }
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            array[index] += index;
        } else {
            array[index] -= index;
        }

    }
    let newSum = 0;
    for (let element of array) {
        newSum += element
    }
    console.log(array)
    console.log(firstSum)
    console.log(newSum)
}
addAndSubstract([5, 15, 23, 56, 35])