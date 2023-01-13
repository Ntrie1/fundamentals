function Orders(product, quantity) {

    let finalResult = result(product, quantity);
    console.log(finalResult.toFixed(2));


    function result(product, quantity) {

        let price = 0;

        switch (product) {
            case `coffee`:
                price = quantity * 1.50; break;

            case `water`:
                price = quantity * 1.00; break;

            case `coke`:
                price = quantity * 1.40; break;

            case `snacks`:
                price = quantity * 2.00; break;



            default:
                break;
        }
        return price;

    }


} Orders("water", 5);