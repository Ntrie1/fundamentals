function firstAndLastK(input){
    let count = input.shift();

    let firstElement = input.slice(0, count);
    let lastElements = input.slice(input.length - count);

    console.log(firstElement.join(' '));
    console.log(lastElements.join(' '));



} firstAndLastK([2, 7, 8, 9])