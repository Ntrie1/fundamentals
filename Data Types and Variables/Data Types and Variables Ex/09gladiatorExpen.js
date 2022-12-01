function solve(losts, helmet, sword, shield, armor) {

    let lostFights = losts;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenShields = 0;
    let expenses = 0;


    for (let currentFights = 1; currentFights <= lostFights; currentFights++) {

        if (currentFights % 2 === 0) {
            expenses += helmetPrice;
        }
        if (currentFights % 3 === 0) {
            expenses += swordPrice;
        }
        if (currentFights % 2 === 0 && currentFights % 3 === 0) {
            expenses += shieldPrice;
            brokenShields++;
        if (brokenShields % 2 === 0) {
                expenses += armorPrice;
            }
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

} solve(23, 12.50, 21.50, 40, 200);