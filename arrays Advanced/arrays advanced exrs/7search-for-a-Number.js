 function searchForANum(nums, actions){


    let numbersToTake = actions[0];
    let numbersToDelete = actions[1];
    let specialNum = actions[2];
    let takenNumbers = nums.slice(0,numbersToTake);
    takenNumbers.splice(0, numbersToDelete);

    let counter = 0;

    for (const number of takenNumbers) {
        if(number === specialNum ){
counter ++;
        }
    }
console.log(`Number ${specialNum} occurs ${counter} times.`);







 }
 searchForANum([5, 2, 3, 4, 1, 6],
[5, 2, 3]
 )