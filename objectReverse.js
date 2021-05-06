const objectReverse = (inputValue) => {
    let keys = [Object.keys(inputValue)[0]];
    let inIter = inputValue[Object.keys(inputValue)[0]];
    while (typeof inIter !== 'string') {
        keys.push(Object.keys(inIter)[0]);
        inIter = inIter[Object.keys(inIter)[0]];
    }
    keys.push(inIter);
    let outputValue = {};
    let outIter = outputValue;
    for (let i = keys.length - 1; i >= 1; i--) {
        if (i !== 1) {
            outIter[keys[i]] = {};
            outIter = outIter[keys[i]];
        } else {
            outIter[keys[i]] = keys[0];
        }
    }
    // console.dir(outputValue, { depth: null });
    return outputValue;
};

module.exports = objectReverse;
