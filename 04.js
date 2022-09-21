function solve(countPpl, typePpl, day) {

    let price = 0;


    switch (typePpl) {
        case `Students`:
            if (day === `Friday`) {
                price = countPpl * 8.45;
            } else if (day === `Saturday`) {
                price = countPpl * 9.80;
            } else if (day === `Sunday`) {
                price = countPpl * 10.46;
            } if (countPpl >= 30) {
                price = price * 0.85;
            }
            break;


        case `Business`:
            if (countPpl >= 100) {
                countPpl -= 10;

            } if (day === `Friday`) {
                price = countPpl * 10.90;
            } else if (day === `Saturday`) {
                price = countPpl * 15.60;
            } else if (day === `Sunday`) {
                price = countPpl * 16;
            }
            break;


        case `Regular`:
            if (day === `Friday`) {
                price = countPpl * 15;
            } else if (day === `Saturday`) {
                price = countPpl * 20;
            } else if (day === `Sunday`) {
                price = countPpl * 22.50;
            } if (countPpl >= 10 && countPpl <= 20) {
                price = price * 0.95
            }
            break;

    }
    console.log(`Total price: ${price.toFixed(2)}`);


}
solve(40,
    "Regular",
    "Saturday"
    );