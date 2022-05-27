// function takeSmallestNum(firstN, secondN, thirdN) {

//     let smallestNum = Math.min(firstN, secondN, thirdN);
//     console.log(smallestNum)
// }
// takeSmallestNum(8, 51, 3,)



function smallestOfThree(x, y, z) {
    let smallestNum = Number.MAX_SAFE_INTEGER;

    for (let n of arguments) {
        getSmaller(n)
    }

    function getSmaller(num) {
        if (num < smallestNum) {
            smallestNum = num;
        }
    }
    return smallestNum;
}
let result = smallestOfThree(4, 7, 12, 62, 1);
console.log(result)