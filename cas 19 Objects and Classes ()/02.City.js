function objCreate(city) {
    // let cityEntries = Object.entries(city);
    // for (let [cityKey, cityValue] of cityEntries) {
    //     console.log(`${cityKey} -> ${cityValue}`)
    // }
    let keys = Object.keys(city);
    for (let key of keys) {
        let value = city[key];
        console.log(`${key} -> ${value}`)
    }
}
objCreate({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})