function rounding(x, y) {
    let ourNumber = x;
    let precision = y;

    if (precision >= 15) {
        precision = 15;
    }
    let result = ourNumber.toFixed(precision)
    console.log(parseFloat(result))
}
rounding(3.143456890, 2)
rounding(10.5, 3)