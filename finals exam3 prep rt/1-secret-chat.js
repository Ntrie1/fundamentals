function secretChat(input) {


    let rawInput = input.slice();
    let message = rawInput.shift();

    let command = rawInput.shift();

    let tempMessage = '';


    while (command !== 'Reveal') {

        let tokens = command.split(':|:');
        let currentCommand = tokens[0]

        switch (currentCommand) {

            case 'InsertSpace':
                let index = Number(tokens[1]);

                tempMessage = message.split('');
                tempMessage.splice(index, 0, ' ');
                message = tempMessage.join('');
                console.log(message);
                break;



            case 'Reverse':
                let substring = tokens[1];
                let reversed = substring.split('').reverse().join('');

                tempMessage = message;

                if (tempMessage.includes(substring)) {
                    tempMessage = tempMessage.replace(substring, '');
                    message = tempMessage.concat(reversed);
                    //  message = tempMessage.replace(substring, reversed);
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;



            case 'ChangeAll':
                let changeSubstring = tokens[1];
                let replacement = tokens[2];

                tempMessage = message;

                message = tempMessage.split(changeSubstring).join(replacement);
                console.log(message);
                break;
        }


        command = rawInput.shift();
    }
    console.log(`You have a new text message: ${message}`);

} secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);