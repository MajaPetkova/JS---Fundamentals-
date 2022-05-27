function sortTwoCriteria(arr) {
    arr.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria;
    })

    console.log(arr.join('\n'))
}
sortTwoCriteria(['alpha', 'beta', 'gamma'])