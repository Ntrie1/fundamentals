function solve(stringArr) {


    for (let i = 0; i < stringArr.length / 2; i++) {
        let tempElement = stringArr[i];

        stringArr[i] = stringArr[stringArr.length - 1 - i];
        stringArr[stringArr.length - 1 - i] = tempElement;

        //  if(i < stringArr.length - 1){
        //   stringArr += " ";
        //  }

    }

    console.log(stringArr.join(` `));





} solve(['a', 'b', 'c', 'd', 'e']);