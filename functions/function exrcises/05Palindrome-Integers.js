 function palindromeInteger(numbersArray){

    let numberArrayLength = numbersArray.length

    for(let index = 0; index < numberArrayLength; index++){

        let numberAsString = numbersArray[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');
       
        
       if(numberAsString === reversedString){
        console.log(`true`);
       } else{
        console.log(`false`);
       }
       
       
       
       
       
        
  

    }






 }palindromeInteger([123,323,421,121]);