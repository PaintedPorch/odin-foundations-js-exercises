const leapYears = function(year) {
    let gapYear = false;
    if (year % 4 === 0) {
        gapYear = true;
        if (year % 100 === 0) {
            gapYear = false;
            if (year % 400 === 0) {
                gapYear = true;
            }
        }
    }
    return gapYear;
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
