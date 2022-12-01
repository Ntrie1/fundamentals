function solve(nums){
    let evenSum = 0;
   
    for(let textNum of nums){
        let num = Number(textNum);
        if(num % 2 === 0){
     evenSum += num
        }
    }


console.log(evenSum);





} solve(['2','4','6','8','10']);