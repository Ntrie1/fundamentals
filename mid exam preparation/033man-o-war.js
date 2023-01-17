function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let line = input.shift();
    let haveAWinner = false;
 
    while (line != 'Retire') {
        line = line.split(' ');
        let command = line.shift();
        let index1 = Number(line[0]);
        let index2 = Number(line[1]);
        let index3 = Number(line[2]);
 
        if (command === 'Fire') {
 
            if (warship[index1]) {
                warship[index1] -= index2;
                if (warship[index1] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    haveAWinner = true;
                    break;
                }
            }
        } else if (command === 'Defend') {
            if (pirateShip[index1] && pirateShip[index2]) {
                for ( let i = index1; i <= index2; i++){
                    pirateShip[i] -= index3;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        haveAWinner = true;
                        break;
                    }
                }               
            }
        } else if (command === 'Repair') {
            if (pirateShip[index1]) {
                pirateShip[index1] += index2;
                if (pirateShip[index1] > maxHealth){
                    pirateShip[index1] = maxHealth;
                }
            }
        } else if (command === 'Status') {
            let minHealthCap = maxHealth * 0.2;
            let needRepairCounter = 0;
            for (let j = 0; j <= pirateShip.length; j++){
                if (pirateShip[j] < minHealthCap){
                    needRepairCounter++;
                }
            }
            console.log(`${needRepairCounter} sections need repair.`);
        }
 
        line = input.shift();
    }
 
    if (!haveAWinner){
        let pirateShipSum = 0;
        pirateShipSum = pirateShip.reduce((a,b) => a + b, 0);
        let warshipSum = 0;
        warshipSum = warship.reduce((a, b) => a + b, 0);
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
 
    }
  }
  manOWar(["12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"])
  
 