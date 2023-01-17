function counterStrike(input){

    let health = Number(input.shift());
    let wonBattles = 0;

    for (const commands of input) {
        if(commands !== 'End of battle'){
            let energy = Number(commands)
            if(health - energy < 0){
                console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${health} energy`)
                return; 
            } 
            health -= energy;
            wonBattles++;
        } else {
            console.log(`Won battles: ${wonBattles}. Energy left: ${health}`)
        } if(wonBattles % 3 === 0){
            health += wonBattles;
        }
    } 
    








}counterStrike (["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
