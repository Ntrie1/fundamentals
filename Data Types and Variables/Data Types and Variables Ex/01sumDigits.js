function sumDigits(num) {

    let numAsString = num.toString();
    let sum = 0;
    let NumOfDigits = numAsString.length;

    for (let i = 0; i < NumOfDigits; i++) {
        let currentNum = Number(numAsString[i]);
        sum += currentNum;


    }
    console.log(sum);



}
sumDigits(123);



