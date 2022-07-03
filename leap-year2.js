function isLeapYear(year) {
    if (year % 4 == 0 && (year != (2100 || 2200 || 2300 || 1800 || 1900))) {
        return true;
    }
    else {
        return false;
    }
}
//else ta na diye korleo hbe 
//direct {} er pore return false kore dewa jabe

// const myYear = 2100;
const myYear = 2012;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);