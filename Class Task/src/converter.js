function convertFromBaseToBase(number, fromBase, toBase) {
    let decimalValue = 0;
    let reversedNumber = number.split("").reverse(); 
    
    reversedNumber.forEach((digit, index) => {
        decimalValue += parseInt(digit, fromBase) * Math.pow(fromBase, index);
    });

    let result = "";
    while (decimalValue > 0) {
        result = (decimalValue % toBase).toString(toBase) + result;
        decimalValue = Math.floor(decimalValue / toBase);
    }

    return result || "0"; 
}

function isPerfectSquare(array) {
    let n = array.length;
    let sum1 = 0;
    let sum2 = 0;

    for (let count = 0; count < n; count++) {
        sum1 += array[count][count];
        sum2 += array[count][n - count - 1];
    }

    if (sum1 !== sum2) return false;

    for (let count = 0; count < n; count++) {
        let rowSum = 0, colSum = 0;
        for (let counter = 0; counter < n; counter++) {
            rowSum += array[count][counter];
            colSum += array[counter][count];
        }
        if (rowSum !== sum1 || colSum !== sum1) return false;
    }

    return true;
}

module.exports = {
    convertFromBaseToBase,
    isPerfectSquare
};