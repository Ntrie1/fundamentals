function solve(century) {
    let year = century * 100;
    let day = Math.trunc(year * 365.2422);
    let hour = day * 24;
    let minute = hour * 60;

    console.log(`${century} centuries = ${year} years = ${day} days = ${hour} hours = ${minute} minutes`);

} solve(5)