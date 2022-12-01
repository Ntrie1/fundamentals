 function listOfNumbers(input){

    let sortedProducts = input.sort();
    let sortedProductsLength = sortedProducts.length;
     

    for(let i = 0; i < sortedProductsLength; i++){
        console.log(`${i + 1}.${sortedProducts[i]}`)
    
    }

        


 } listOfNumbers(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);