function certificate(grade, fullName) {


    let entireName = getFullName(fullName);

    let formatedGrade = formatGrade(grade);


    if (pass(grade)) {

        PrintHeader();
        console.log(entireName);
        console.log(formatedGrade);
    } else {
        console.log(`FLOP`);


    }



    function getFullName(fullName) {

        return `${fullName[0]} ${fullName[1]}`;


    }


    function PrintHeader() {
        console.log(`~~~-   {@}   -~~~`);
        console.log(`~- Certificate -~`);
        console.log(`~~~-  ~---~  -~~~`);


    }


    function formatGrade(grade) {
        let gradeWord = ` `;

        if (grade < 3) {
            gradeWord = "Fail"
            grade = 2;
        } else if (grade < 3.5) {
            gradeWord = "Poor"
        } else if (grade < 4.5) {
            gradeWord = "Good"
        } else if (grade < 5.5) {
            gradeWord = "Very good"
        } else {
            gradeWord = "Excellent"
        }

        if (gradeWord === `Fail`) {
            return `${gradeWord} ${grade}`;
        } else {

            return `${gradeWord} (${grade.toFixed(2)})`;
        }

    }
    function pass(grade) {

        return grade >= 3;

    }
}
certificate(5.25, [`Peter`, `Carter`]);


