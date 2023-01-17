function gunieaPig(input){

    let foodInGrams = Number(input.shift()) * 1000;
    let hayInGrams = Number(input.shift()) * 1000;
    let coverInGrams = Number(input.shift())* 1000;
    let pigWeigthInGrams = Number(input.shift())* 1000;
    

    let daysOfMonth = 1;

    while(daysOfMonth <= 30){
    
        foodInGrams -= 300;
        
        if(daysOfMonth % 2 === 0){
            hayInGrams -= (foodInGrams * 0.05);
        }
        if(daysOfMonth % 3 === 0){
            coverInGrams -= (pigWeigthInGrams / 3);
        }
        
        
        
        daysOfMonth++;
    }
   

    let excessFood = (foodInGrams / 1000).toFixed(2)
    let excessHay = (hayInGrams / 1000).toFixed(2);
    let excessCover = (coverInGrams / 1000).toFixed(2);



if(excessFood > 0 && excessHay > 0 && excessCover > 0){
console.log(`Everything is fine! Puppy is happy! Food: ${excessFood}, Hay: ${excessHay}, Cover: ${excessCover}.`);
} else if(excessFood <= 0 || excessHay <= 0 || excessCover <= 0){
    console.log(`Merry must go to the pet store!`);
}
    





    





} gunieaPig(["9",
"5",
"5.2",
"1"])

