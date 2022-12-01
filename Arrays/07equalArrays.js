function solve(firstArr, secondArr) {
    let sum = 0;


    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }

        sum += Number(firstArr[i]);
    }

    console.log(`Arrays are identical. Sum: ${sum}`);





} solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])