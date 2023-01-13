function simpleCalc(num1, num2, operator) {


    let finalOperator = whatOperator(operator);
    console.log(finalOperator)



    function whatOperator(operator) {

        switch (operator) {
            case 'multiply':
                return num1 * num2; break;
            case 'divide':
                return num1 / num2; break;
            case 'add':
                return num1 + num2; break;
            case 'subtract':
                return num1 - num2; break;

            default:
                break;
        }
    }




} simpleCalc(5, 5, 'multiply');