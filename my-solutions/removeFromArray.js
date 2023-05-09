const removeFromArray = function(arr, ...others) {
    return arr.filter(val => !others.includes(val));;
};

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 1, 2, 3, 4, 5));

// Do not edit below this line
module.exports = removeFromArray;
