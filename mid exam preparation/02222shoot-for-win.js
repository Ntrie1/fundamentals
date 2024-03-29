 function shootForTheWin(sequence){
    let shotTargets = 0;
    let targetsArray = sequence[0].split(' ').map(el => Number(el));
    sequence.shift();
 
    for (const element of sequence) {
        if(element == 'End') {
            console.log(`Shot targets: ${shotTargets} -> ${targetsArray.join(' ')}`);
        }
        if(targetsArray.length > element) {
            let currentTarget = targetsArray[element];
            
            for (const i in targetsArray) {
                if(targetsArray[i] != -1) {
                    if(targetsArray[i] > currentTarget) {
                        targetsArray[i] -= currentTarget;
                    } else {
                        targetsArray[i] += currentTarget;
                    }
                }
            }
            targetsArray[element] = -1;
            shotTargets += 1;
        }
    }
}shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
