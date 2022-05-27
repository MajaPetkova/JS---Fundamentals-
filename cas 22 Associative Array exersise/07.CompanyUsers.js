function company(input) {
    let listOfCompanies = {};
    for (let item of input) {

        let [company, num] = item.split(' -> ');
        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }
        if (!listOfCompanies[company].includes(num)) {
            listOfCompanies[company].push(num)
        }
    }
    let sortedCompanies = Object.keys(listOfCompanies);
    sortedCompanies.sort((a, b) => a.localeCompare(b))
    for (let item of sortedCompanies) {
        console.log(item)
        for (let emp of listOfCompanies[item]) {
            console.log(`-- ${emp}`)
        }
    }
}
company([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'

])