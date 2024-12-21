const numbers=[1,2,3,4,5,6,7,8,9];

function square(numbersArray){

const calculated = numbersArray.map(number => number*number);

return calculated;

}

console.log(square(numbers));
