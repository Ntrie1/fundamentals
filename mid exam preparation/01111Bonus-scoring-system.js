function bonusScoringSystem(input) {

    let students = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

    let maxBonus = 0;
    let maxAttendances = 0;


    for (let i = 0; i < students; i++) {
        let attendances = input[i];

        let bonus = (attendances / lecturesCount) * (5 + initialBonus);

        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAttendances = attendances;
        }

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);










} bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);