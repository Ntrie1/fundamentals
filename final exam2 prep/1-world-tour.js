function worldTour(input) {

    let trip = input.shift();
    let destinations = input.shift();

    while (destinations !== 'Travel') {
        let [command, argumentOne, argumentTwo] = destinations.split(':')

        switch (command) {
            case 'Add Stop':
                let index = Number(argumentOne);
                let string = argumentTwo;
                

                if (trip.indexOf(index)) {
                    trip = trip.split('');
                    trip.splice(index, 0, string);
                    trip = trip.join('');
                }
                console.log(trip);
                break;



            case 'Remove Stop':
                let startIndex = Number(argumentOne);
                let endIndex = Number(argumentTwo);

                if (trip[startIndex] && trip[endIndex]) {

                    let wordToRemove = trip.substring(startIndex, endIndex + 1);
                    trip = trip.replace(wordToRemove, '');
                }
                console.log(trip);
                break;


            case 'Switch':
                let oldString = argumentOne;
                let newString = argumentTwo;


                trip = trip.split(oldString).join(newString);
                console.log(trip);
                break;
        }

        destinations = input.shift();

    }

    console.log(`Ready for world tour! Planned stops: ${trip}`);

} worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
