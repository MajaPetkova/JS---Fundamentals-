function solve(input) {
    for (let line of input) {
        // let singleLineInfo = line.split('|');
        // let town = singleLineInfo[0];
        // let latitude = singleLineInfo[1];
        // let longitude = singleLineInfo[2];
        let [town, latitude, longitude] = line.split(' | ');
        let currentTownInfo = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(currentTownInfo)
    }

}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])