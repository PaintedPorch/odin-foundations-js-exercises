const sumAll = function(num1, num2) {
    total = 0;

    if (num1 < num2 && num1 >= 0 && num2 >= 0) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            for (num1; num1 <= num2; num1++) {
                total+=num1;
            }
        }
        else {
            return "ERROR";
        }
    }
    else if (num1 > num2 && num1 >= 0 && num2 >= 0) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            for (num2; num2 <= num1; num2++) {
                total+=num2;
            } 
        }
        else {
            return "ERROR";
        }
    }
    else {
        return "ERROR";
    }

    return total;
};  

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
