function rightPlace(str, char, res){
    let replaceStr = str.replace("_", char);
    let output = replaceStr === res? "Matched": "Not Matched"
    console.log(output);
    

    



}
rightPlace('Str_ng', 'i', 'String');