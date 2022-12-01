function solve(arr1, arr2){

    let resultArray = [];
    let arrayOneLength = arr1.length;

    for(i = 0; i < arrayOneLength; i++){
        if(i % 2 === 0){
            resultArray.push(Number(arr1[i]) + Number(arr2[i]));
        } else{
            resultArray.push(arr1[i] + arr2[i]);
        }
    }
    console.log(resultArray.join(" - "))


} solve (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])


