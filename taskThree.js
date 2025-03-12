const counter = {
    count: 4,
    step: 1
};

function increment(numOne, numTwo) {
    const result = numOne + numTwo;
    return result;
}

console.log(increment(counter.count, counter.step));
