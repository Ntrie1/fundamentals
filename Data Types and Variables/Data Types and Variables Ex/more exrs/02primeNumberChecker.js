function solve(num) {


    let inputValue = num;
    let isprime = inputValue == 1 ? false : true;

    for (let i = 2; i < inputValue; i++) {
        inputValue % i == 0 ? isprime *= false : isprime *= true;
    };

    console.log(`${isprime ? 'true' : 'false'}`);
    console.log()




} solve(7);