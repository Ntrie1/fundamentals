function friendListMaintenance(input) {

    let friendsNames = input.shift().split(', ');
    let commands = input.slice();
    let currentLine = commands.shift();
    let blackListedNames = 0;
    let lostNames = 0;

    while (currentLine != 'Report') {
        let lineArgs = currentLine.split(' ')
        let command = lineArgs[0];
        let argumentOne = lineArgs[1];
        let argumentTwo = lineArgs[2];



        switch (command) {
            case 'Blacklist':

                let initalarr = friendsNames.slice();
                let index = friendsNames.indexOf(argumentOne);
                if (friendsNames.includes(argumentOne)) {
                    friendsNames.splice(index, 1, 'Blacklisted')
                    console.log(`${initalarr[index]} was blacklisted.`);
                    blackListedNames++;
                } else {
                    console.log(`${argumentOne} was not found.`);
                }
                break;


            case 'Error':
                let indexErr = argumentOne

                let rawArr = friendsNames.slice();
                if (friendsNames[indexErr] && friendsNames[indexErr] !== 'Blacklisted' && friendsNames[indexErr] !== 'Lost') {
                    friendsNames[indexErr] = 'Lost';
                    console.log(`${rawArr[indexErr]} was lost due to an error.`);
                    lostNames++;
                }
                break;



            case 'Change':
                let indexChange = argumentOne


                if (indexChange >= 0 && indexChange < friendsNames.length) {
                    let oldName = friendsNames[indexChange];
                    let newName = argumentTwo;
                    friendsNames.splice(indexChange, 1, argumentTwo);
                    console.log(`${oldName} changed his username to ${newName}.`)
                } break;


            default:
                break;
        }





        currentLine = commands.shift()
    }

    console.log(`Blacklisted names: ${blackListedNames} `);
    console.log(`Lost names: ${lostNames}`);
    console.log(friendsNames.join(' '));


} friendListMaintenance(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"])
