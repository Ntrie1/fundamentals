function solve(num, percision){

    if(percision > 15){
        percision = 15;
    }
    
    
    let finalNum = num.toFixed(percision);
    console.log(parseFloat(finalNum));


    



}
solve(10.5,3);