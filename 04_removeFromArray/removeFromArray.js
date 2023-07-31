const removeFromArray = function(...arg) {

    let newArr = [];
    for (let i = 0; i<arg[0].length; i++)
    {
        let isIn = false;
        for(let j = 1; j<arg.length;j++) {
            if (arg[0][i] === arg[j])
                isIn = true;
        }
        if (!isIn) {
            newArr.push(arg[0][i])
        }
    }
        return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
