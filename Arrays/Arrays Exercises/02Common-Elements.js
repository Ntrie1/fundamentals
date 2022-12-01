function solve(arr1, arr2) {




    for (let firstArrIndex = 0; firstArrIndex < arr1.length; firstArrIndex++) {

        for (let secondArrIndex = 0; secondArrIndex < arr2.length; secondArrIndex++) {
            if (arr1[firstArrIndex] === arr2[secondArrIndex]) {
                console.log(arr1[firstArrIndex]);
            }
        }


    }



} solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);