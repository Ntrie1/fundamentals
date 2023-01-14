 function covertObjects(JSONdata){

    let person = JSON.parse(JSONdata);

    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`)
    }











 } covertObjects('{"name": "George", "age": 40, "town": "Sofia"}');