function sorting(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let resultArr = [];


    for (let index = 0; index < sortedArray.length; index++) {
        let lastElement = sortedArray.pop();
        let firstArr = sortedArray.shift();
        resultArr.push(lastElement);
        resultArr.push(firstArr);

    }
    resultArr.push(sortedArray.pop());
    resultArr.push(sortedArray.shift());

    console.log((resultArr).join(' '));


} sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])