function solve(arr){

    for(i = 0; i < arr.length / 2; i++){
        const element = arr[i];

        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = element;



    }

console.log(arr.join(" "));
    
   

} solve(['a', 'b', 'c', 'd', 'e'])