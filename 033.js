function solve(year,month,date){
    let nextDay = new Date(year, month - 1, date + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
solve(2016, 9, 30);