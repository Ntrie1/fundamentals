 function destinationMapper(input){


    let pattern = /(=|\/)(?<words>[A-Z][A-Za-z]{2,})\1/gm;

    let match = pattern.exec(input);
    let sum = 0;
    let cities = [];
   
    while (match) {
        let matchedWords = match.groups.words;
    
        matchedWords = matchedWords.split();
       
        for (let i = 0; i < matchedWords.length; i++) {
            let destinations = matchedWords[i];
         cities.push(destinations);
       
            let travelPoints = Number(destinations.length);

            sum += travelPoints;
             
      }
      
      
      match = pattern.exec(input);
    }
    
    console.log(`Destinations: ${cities.join(', ')}`);
    console.log(`Travel Points: ${sum}`);








 } destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")