function solve(arr, rotation){

   
   let rotationTimes = rotation % arr.length;
    for(i = 0; i < rotationTimes; i++){
        let numberToMove = arr.shift();
        arr.push(numberToMove);

    }
    console.log(arr.join(" "));












} solve([51, 47, 32, 61, 21], 2);