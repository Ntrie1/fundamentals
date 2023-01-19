function thePianist(input) {

    let numOfPieces = Number(input.shift());

    let collection = {};



    for (let i = 0; i < numOfPieces; i++) {

        let [piece, composer, key] = input.shift().split('|')


        collection[piece] = { composer, key };
    }

    let commandLine = input.shift();

    while (commandLine !== 'Stop') {

        let [command, newPiece, argumentOne, argumentTwo] = commandLine.split('|');

        switch (command) {
            case 'Add':
                if (collection[newPiece] != undefined) {
                    console.log(`${newPiece} is already in the collection!`)
                } else {
                    collection[newPiece] = {
                        composer: argumentOne,
                        key: argumentTwo
                    };
                    console.log(`${newPiece} by ${argumentOne} in ${argumentTwo} added to the collection!`);
                }
                break;


            case 'Remove':
                if (collection[newPiece] != undefined) {
                    delete collection[newPiece];
                    console.log(`Successfully removed ${newPiece}!`);
                } else {
                    console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
                }
                break;



            case 'ChangeKey':
                if (collection[newPiece] != undefined) {
                    collection[newPiece].key = argumentOne;
                    console.log(`Changed the key of ${newPiece} to ${argumentOne}!`);
                } else {
                    console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
                }
                break;
        }


        commandLine = input.shift();
    }




    for (const name in collection) {
        console.log(`${name} -> Composer: ${collection[name].composer}, Key: ${collection[name].key}`);
    }









} thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])
