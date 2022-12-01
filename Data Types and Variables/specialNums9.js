 function solve(num){

     for(let i = 1; i <= num; i ++){
         let sum = 0;
        let numToString = i.toString();

        for(j = 0; j < numToString.length; j++){
            sum += Number(numToString[j]);
        
        
        }
        
        console.log(sum === 5 || sum === 7 || sum === 11 ? `${i} -> True`: `${i} -> False`);
    }


 } solve(15);