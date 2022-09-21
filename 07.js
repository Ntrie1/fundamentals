function solve(num) {

    for (let i = 1; i <= num; i++) {

        let inLine = " ";

        for (let x = 1; x <= i; x++) {
            inLine += `${i} `;
        }
        console.log(inLine);
    }


}
solve(6);