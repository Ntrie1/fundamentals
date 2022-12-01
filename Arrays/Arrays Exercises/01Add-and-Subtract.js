  function solve(arr){
 
    let resultArray = [];
    let inpurArrSum = 0;
    let resultArraySum = 0;
    let arrLength = arr.length;

    for(let i =0; i < arrLength; i ++){

        let currentNum = arr[i];
        
        let odd = currentNum - i;
        let even = (currentNum + i);

        if(currentNum % 2 === 0){
            resultArray.push(even);

        } else{
            resultArray.push(odd);
        }

        inpurArrSum += currentNum ;
        resultArraySum += resultArray[i];

    }
    console.log(resultArray);
    console.log(inpurArrSum);
    console.log(resultArraySum);




  } solve([5, 15, 23, 56, 35]);