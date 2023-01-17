function shoppingList2(input){

    let shoppingList = input.shift().split('!');
    let commands = slice();
    let allCommand = commands.shift();

    while(allCommand !== 'Go Shopping!'){
    let lineArguments = firstCommand.split(' ');
    let command = lineArguments[0];
    let argumentOne = lineArguments[1];
    let argumentTwo = lineArguments[2];
    
   switch (command) {
    case 'Urgent':
        if(!shoppingList.includes(argumentOne)){
            shoppingList.unshift(argumentOne);
        }
    break;

    case 'Unnecessary':
        let itemIndex = shoppingList.indexOf(argumentOne);
        if (itemIndex > -1) {
            shoppingList.splice(itemIndex, 1);
        }

    break;

    case 'Correct':

    break;

    case 'Rearrange':

    break;
        

        break;
   
   
   }


    }






   





} shoppingList2(["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"])