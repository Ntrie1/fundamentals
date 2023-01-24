function easterEggs(input){
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@|#]+[\W|\_]*\/+(?<number>[0-9]+)\/+/g;
   
   
    let match = pattern.exec(input);
    


    while(match){

        let matchedcolor = match.groups.color;
        let matchedAmount = match.groups.number
       
        
        console.log(`You found ${matchedAmount} ${matchedcolor} eggs!`)
  

        match = pattern.exec(input)
    }
 
} easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])