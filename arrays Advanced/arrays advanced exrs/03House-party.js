function houseParty(arr){

let guessArr = [];

for(const el of arr){
    let command = el.split(' ');

    let name = command[0];

    if(command.length === 3){
        if(guessArr.includes(name)){
            console.log(`${name} is already in the list!`);
        }else {
            guessArr.push(name);
        }
    }else {
        if(!guessArr.includes(name)){
            console.log(`${name} is not in the list!`)

        }else{
            let index = guessArr.indexOf(name)
            guessArr.splice(index,1)

        }
    }
}
console.log(guessArr.join(`\n`));

} houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)