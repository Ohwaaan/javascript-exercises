const sumAll = function(num1, num2) {
/*
    if(num1 or num2 is not a number or negative)
        return error

    if(num1>num2)
        let start = num1
        let end = num2
    else
        let start = num2
        let end = num1
    let sum = 0;
    for (let i = start; i < end; i++)
    {
        sum += i;
    }
    return sum
*/

    if(typeof(num1) != 'number' || num1<0 ||typeof(num2) != 'number' || num2<0)
        return 'ERROR';

    let start;
    let end;
    if(num1<num2){
        start = num1;
        end = num2;
    }
    else{
        start = num2;
        end = num1;
    }
    let sum = 0;
    for (let i = start; i <= end; i++)
    {
        sum += i;
        console.log(sum);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
