let myWord = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";

let found = myWord.indexOf('.bg')
while (found !== -1) {
    myWord = myWord.replace('.bg', '.com');
    found = myWord.indexOf('.bg')
}
console.log(myWord)