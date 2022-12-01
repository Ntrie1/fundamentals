function solve(num){
    num = num.toString();
    let sum = 0;
    let currentStr = num.length

    for(let i = 0; i < currentStr; i ++){
        sum += Number(num[i]);
   
    }
    let result = sum.toString().includes(`9`);
    console.log(result?
    `${num} Amazing? True` :
    `${num} Amazing? False`);
    






}
solve(1233);