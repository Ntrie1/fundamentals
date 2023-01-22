function passwordReset(input) {

    let password = input.shift();
    let lineCommand = input.shift();
    let tempMessage = '';

    while (lineCommand !== 'Done') {
        let [command, argumentOne, argumentTwo] = lineCommand.split(' ');

        switch (command) {
            case 'TakeOdd':
                let stringLength = password.length;
                tempMessage = [];
                for (let i = 0; i < stringLength; i++) {
                    if (!(i % 2 === 0)) {
                        tempMessage.push(password[i])
                    }
                }
                password = tempMessage.join('');
                console.log(password);
                break;



            case 'Cut':
                let index = Number(argumentOne);
                let length = Number(argumentTwo);

                if (password[index] && password[length]) {
                    tempMessage = password.split('');
                    tempMessage.splice(index, length);
                    password = tempMessage.join('');
                }
                console.log(password);
                break;


            case 'Substitute':
                let substring = argumentOne;
                let substitute = argumentTwo;
                tempMessage = password;

                if (password.includes(substring)) {
                    tempMessage = tempMessage.split(substring).join(substitute);
                    password = tempMessage;
                    console.log(password);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;


        }



        lineCommand = input.shift();
    }


    console.log(`Your password is: ${password}`);








} passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
