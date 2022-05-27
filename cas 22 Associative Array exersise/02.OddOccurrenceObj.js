function solve(input) {
    let obj = {};
    let words = input.toLowerCase().split(' ');

    for (let word of words) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word] += 1;
    }
    let result = [];
    for (let [key, value] of Object.entries(obj)) {
        if (value % 2 !== 0) {
            result.push(key)
        }

    }
    console.log(result.join(' '))
        // for (let word of words) {
        //     let stringToLower = word.toLowerCase()
        //     if (!Object.keys(obj).includes(stringToLower)) {
        //         obj[stringToLower] = 0;
        //     }
        //     obj[stringToLower] += 1;
        // }
        // let result = [];
        // for (let [key, value] of Object.entries(obj)) {
        //     if (value % 2 !== 0) {
        //         result.push(key)
        //     }
        // }
        // console.log(result.join(' '))
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')