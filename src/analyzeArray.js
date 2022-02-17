
const analyzeArray = (analyzeArr) => {

    return {
        average: (analyzeArr.reduce((previousValue, currentValue) => previousValue + currentValue, 0))/ analyzeArr.length,
        
        min: Math.min(...analyzeArr),
    
        max: Math.max(...analyzeArr),
    
        length: analyzeArr.length,
    };
};

export { analyzeArray }