function addressBook(input) {
    let catalog = {};
    for (let line of input) {
        //parse input
        let [name, address] = line.split(':');
        //store data
        catalog[name] = address;
    }

    //sort catalog
    //-- convert to array
    let sorted = Object.entries(catalog);

    //--sort array using comapare function
    sorted.sort((a, b) => a[0].localeCompare(b[0])
        // nameA = a[0];
        // nameB = b[0];
        // return 

    )

    //print result
    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`)
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])