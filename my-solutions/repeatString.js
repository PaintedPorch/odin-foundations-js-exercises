const repeatString = function(string, num) {
    result = "";

    if (typeof string == "string" && num >= 0) {
        for (let i = 0; i < num; i++) {
            result += string;
        }
    }
    else if (typeof string != "string" || num < 0) {
        result = "ERROR";
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
