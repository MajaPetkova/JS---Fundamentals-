function meetings(input) {
    let meeting = {};
    for (let line of input) {
        let [day, name] = line.split(' ');
        if (meeting.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }
    for (let day in meeting) {
        console.log(`${day} -> ${meeting[day]}`)
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])