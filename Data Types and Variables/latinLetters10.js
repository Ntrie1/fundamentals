function triplesOfLatinLetters(n) {
    n = Number(n);
    for (let i = 0; i < n; i++) {
        let leter1 = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let leter2 = String.fromCharCode(97 + j);
            for (let q = 0; q < n; q++) {
                let leter3 = String.fromCharCode(97 + q);
                console.log(leter1+leter2+leter3);
            }
        }
    }
} triplesOfLatinLetters('3')