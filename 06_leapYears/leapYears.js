const leapYears = function(year) {
    /*
    if div by 400 = leap
    if div by 4 and not 100 = not leap
    */
    /*
    if (year % 400 === 0)
    return true;

    if (year % 4 === 0 && !(year % 100 ===0))
    return true;

    return false;
    */
   return year%4 === 0 &&(year%100 !==0||year %400 ===0);
};

// Do not edit below this line
module.exports = leapYears;
