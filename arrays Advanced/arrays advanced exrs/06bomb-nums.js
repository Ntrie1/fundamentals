function bombNumbers(nums, specialNums){

    let sequenceArray = nums;

    let specialNumber = specialNums.shift();
    let bombNum = specialNums.shift();

    while(sequenceArray.includes(specialNumber)){
        let index = sequenceArray.indexOf(specialNumber);
        let elementToRemove = bombNum * 2 + 1;
        let startIndex = index - bombNum;

        if(startIndex < 0){
            elementToRemove += startIndex;
            startIndex = 0;
        }
        sequenceArray.splice(startIndex, elementToRemove)



    }
    let sum = 0;
    for (const el of sequenceArray) {
        sum += el
    }
    console.log(sum);








}
 bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
[4, 2])