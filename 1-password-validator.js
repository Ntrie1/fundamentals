function passwordValidator(input) {

    let copyInput = input.slice();
    let password = copyInput.shift();
    if (password == null){
        return;
    }


    let rawLine = copyInput.shift().split(' ');
  
    let firstCommand = rawLine.shift();
   
    while (firstCommand !== 'Complete') {


        switch (firstCommand) {
            case 'Replace': {
            
                let character = rawLine.shift();
                let value = rawLine.shift();
                let asciiValue = Number(character.charCodeAt()) + Number(value);
                let newCharacter = String.fromCharCode(asciiValue);
                let isTrue = false;
               
                for (let i = 0; i < password.length; i++) {
                    if (password[i] == character) {
                        password = password.replace(character, newCharacter);
                        isTrue = true;
                    }

                }
                if (isTrue) {
                    console.log(password);
                }
                break;
            }
            case 'Make': {
              
                let casing = rawLine.shift();
                let index = Number(rawLine.shift());
                let initalCut = password.substring(0, index);
                let secondCut = password.substring(index + 1);
                if (casing == 'Lower' && password[index]) {
                    let newAdd = password[index].toLowerCase();
                    password = initalCut + newAdd + secondCut;
                    console.log(password);
                }
                else if (casing = 'Upper' && password[index]) {
                    let newAdd = password[index].toUpperCase();
                    password = initalCut + newAdd + secondCut;
                    console.log(password);
                }
                break;
            }
            case 'Insert': {
              
                let index = Number(rawLine.shift());
                let character = rawLine.shift();
                if (password[index]) {
                    let initialInsert = password.substring(0, index);
                    let finalInsert = password.substring(index);
                    password = initialInsert + character + finalInsert;
                    console.log(password)
                }
                break;
            }
            case 'Validation': {
                
                
                if (password.length < 8) {
                    console.log('Password must be at least 8 characters long!');
                }
                for (let i = 0; i < password.length; i++) {
                    let regEx = /\w/g;
                    let matched = password.match(regEx);
                   
                    if (matched){
                   
                        if (matched.length < password.length) {
                        console.log('Password must consist only of letters, digits and _!');
                        break;
                    }
                }
                    if (!matched){
                    console.log('Password must consist only of letters, digits and _!');
                    break;
                }

                }
                let isUpperCase = false;
                let isLowerCase = false;
                let isNum = false;
                for (let i = 0; i < password.length; i++) {
                    if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
                        isLowerCase = true;
                    }
                    if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) {
                        isUpperCase = true
                    }
                    if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                        isNum = true;
                    }
                }
                if (!isUpperCase) {
                    console.log('Password must consist at least one uppercase letter!');
                }
                if (!isLowerCase) {
                    console.log('Password must consist at least one lowercase letter!');
                }
                if (!isNum) {
                    console.log('Password must consist at least one digit!');
                }

            }
        }
        rawLine = copyInput.shift().split(' ');
        firstCommand = rawLine.shift();
    }

} passwordValidator(['invalidpassword*',
'Add 2 p',
'Replace i -50',
'Replace * 10',
'Make Upper 2',
'Validation',
'Complete']);
