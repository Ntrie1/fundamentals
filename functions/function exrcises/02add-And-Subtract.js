function addAndSubtract(number1, number2, lastNumber) {


    function add(num1, num2) {
        let sumOfTwoNums = num1 + num2;
        return sumOfTwoNums;

    }

    let sum = add(number1, number2)

    function subtract(sumOfTwo, lastNum) {

        return sumOfTwo - lastNum;

    }
    let result = subtract(sum, lastNumber)

    console.log(result);





} addAndSubtract(23, 6, 10);