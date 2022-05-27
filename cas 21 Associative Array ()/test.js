// let myAssArr = {};
// myAssArr.John = '+1 - 888 - 555 - 422';
// myAssArr['John Smith'] = '+1 - 888 - 555 - 422';
// let name = "John Smith";
// myAssArr[name] = "+4545867"


let assArr = {};
assArr['one'] = 1;
assArr['two'] = 2;
assArr['three'] = 3;
let key = 'three'
console.log(assArr.hasOwnProperty('two'))
console.log(assArr.hasOwnProperty('four'))
console.log(assArr.hasOwnProperty(key))
delete assArr.three;
console.log(assArr.hasOwnProperty('three'))
    // for (let key of Object.keys(assArr)) {
    //     console.log(`${key} -> ${assArr[key]}`)
    // }
    // for (let key in assArr) {
    //     console.log(`${key} -> ${assArr[key]}`)
    // }