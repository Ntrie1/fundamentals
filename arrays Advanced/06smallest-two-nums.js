 function smallestTwoNums(input){

    let sortedInAscending = input.sort((a,b) => a - b)
    let finalRes = sortedInAscending.slice(0, 2)


    console.log(finalRes.join(' '));



 } smallestTwoNums([30, 15, 50, 5]);