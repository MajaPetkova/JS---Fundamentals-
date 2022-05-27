function listOfProducts(arr) {
    let list = arr.sort((a, b) => {
        return a.localeCompare(b)
    })
    for (let i = 0; i < list.length; i++) {
        console.log(`${i+1}.${list[i]}`)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples', 'Ananas'])