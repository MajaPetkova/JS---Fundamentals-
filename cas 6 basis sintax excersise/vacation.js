function vacation(people, group, day) {
    price = 0;
    switch (group) {
        case "Students":
            if (day === "Friday") {
                price = people * 8.45;
            } else if (day === "Saturday") {
                price = people * 9.80;
            } else if (day === "Sunday") {
                price = people * 10.46
            }

            break;
        case "Business":
            if (day === "Friday") {
                price = people * 10.90;
            } else if (day === "Saturday") {
                price = people * 15.60;
            } else if (day === "Sunday") {
                price = people * 16;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price = people * 15;
            } else if (day === "Saturday") {
                price = people * 20;
            } else if (day === "Sunday") {
                price = people * 22.50;
            }
            break;
    }
    if (group === "Students" && people >= 30) {
        price = price * 0.85
    }
    if (group === "Business" && people >= 100) {
        if (day === "Friday") {
            price = price - (10 * 10.90)
        } else if (day === "Saturday") {
            price = price - (10 * 15.60)
        } else if (day === "Sunday") {
            price = price - (10 * 16)
        }
    }
    if (group === "Regular" && people >= 10 && people <= 20) {
        price = price * 0.95
    }
    console.log(`Total price: ${price.toFixed(2)}`)

}
vacation(100,
    "Business",
    "Sunday"

)