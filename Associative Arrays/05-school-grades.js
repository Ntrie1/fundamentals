function schoolGrades(input) {
    let studentsInfo = {};
  
    input.forEach((element) => {
      let command = element.split(" ");
      let name = command[0];
      let grades = command.splice(1, command.length);
      
      if (studentsInfo[name]) {
        studentsInfo[name] = studentsInfo[name].concat(grades);
        return;
      }
      studentsInfo[name] = grades;
    });
 
    let entries = Object.entries(studentsInfo).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    let sortedObject = {};
   
    entries.forEach((element) => {
      sortedObject[element[0]] = element[1];
    });
  
    for (const student in sortedObject) {
      let sum = 0;
      sortedObject[student].forEach((item) => (sum += Number(item)));
  
      console.log(`${student}: ${(sum / sortedObject[student].length).toFixed(2)}`);
    }
  }

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);