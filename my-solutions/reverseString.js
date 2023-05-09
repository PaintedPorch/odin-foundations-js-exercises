const reverseString = function(string) {
    letters = string.split("");
    reverse_string = "";
    for (let i = letters.length; i > 0; i--) {
        reverse_string += letters[i - 1];
    }

    return reverse_string;
};

// Do not edit below this line
module.exports = reverseString;