function searchForNumbers(collection, numbers) {
    let elementsToTake = numbers[0];
    let elementsToDelete = numbers[1];
    let elementsToSearch = numbers[2];

    let newArr = collection.slice(0, elementsToTake);
    newArr.splice(0, elementsToDelete);
    let counter = 0;
    let newArrL = newArr.length;
    for (let i = 0; i < newArrL; i++) {
        let currentEl = newArr[i]
        if (elementsToSearch === currentEl) {
            counter++
        }
    }
    console.log(`Number ${elementsToSearch} occurs ${counter} times.`)
}
searchForNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3])