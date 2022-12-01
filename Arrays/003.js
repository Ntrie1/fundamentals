function solve(n, inputArr) {
    let res = [];

    for (let i = 0; i < n; i++) {
       // res[n - 1 - i] = inputArr[i];
         res[i] = inputArr[n - 1 - i];
    }


    console.log(res.join(" "));

} solve(3, [10, 20, 30, 40, 50]);