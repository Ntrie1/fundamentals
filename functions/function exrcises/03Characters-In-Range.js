 function charactersInRange(firstChar, secondChar){

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt())
    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt())


    let resultString = ` `;

    for(let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++){
        let singleChar = String.fromCharCode(currentChar);
        resultString += `${singleChar} `;
    }
    console.log(resultString);

 } charactersInRange('#',':')