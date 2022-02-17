
function analyzeArray(analyzeArr) {

    let numObj = {};

    let sum = analyzeArr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    let average = sum / analyzeArr.length;

    let min = Math.min(...analyzeArr);

    let max = Math.max(...analyzeArr);

    let length = analyzeArr.length;

    numObj.average = average;
    numObj.min = min;
    numObj.max = max;
    numObj.length = length;

    return numObj;
    
};

export { analyzeArray }