function solve(numbers) {
    let sum = 0;

    for (let number of numbers) {
        let num = Number(number)

        if (num % 2 === 0) {
            sum += num;
        } else {
            sum -= num;
        }
    }

    console.log(sum);


} solve([3, 5, 7, 9]);