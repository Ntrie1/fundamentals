function solve(startNum, endNum) {

    let sum = 0;
    let row = "";

    for (let i = startNum; i <= endNum; i++) {
        row += i + " ";
        sum += i;


    }
    console.log(row);
    console.log(`Sum: ${sum}`)


} solve(5, 10);