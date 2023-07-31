const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(nums) {
	let sum = 0;

  nums.forEach((num) => {
    sum+=num;
  });

  return sum;
};

const multiply = function(nums) {
  	let sum = 1;

    nums.forEach((num) => {
      sum*=num;
    });

    return sum;
};

const power = function(num, degree) {
	let sum = num;
  for(let i = 1; i<degree;i++)
  {
    sum *=num;
  }
  return sum;

};

const factorial = function(num) {
	let sum =1;
  for(let i = 1;i<num+1;i++)
  {
    sum *= i;
  }
  return sum;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
