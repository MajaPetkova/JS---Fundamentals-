function solve(input) {
    let words = input.toLowerCase().split(' ');
    let obj = {};

    for (let word of words) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word]++
    }
    let entries = Object.entries(obj);
    let filtredEl = entries.filter((el) => {
        return el[1] % 2 !== 0
    })
    let result = [];
    for (let arr of filtredEl) {
        result.push(arr[0])
    }
console.log(result.join(' '))

} solve('Java C# Php PHP JAva PhP 3 C# 3 1 5 C#')