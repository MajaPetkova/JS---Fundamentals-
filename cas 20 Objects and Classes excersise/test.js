let myObj = {
    make: 'Opel',
    model: 'Zafira',
    color: 'gray',
    maxSpeed: 180,
    makeSound: () =>
        console.log('Vroom')
}


myObj.makeSound()
    // console.log(Object.entries(myObj))
let objKeys = Object.keys(myObj)
for (let key of objKeys) {
    console.log(`${key} -> ${myObj[key]}`)
}

// myObj = {};
// myObj.color = 'red';
// let index = "mileage"
// myObj['mileage'] = 11;
// console.log(myObj);
// myObj.mileage = 11;
// console.log(myObj[index])
// console.log(myObj.mileage)