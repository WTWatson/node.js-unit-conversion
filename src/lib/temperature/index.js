
let conversions = {
    ['C,F']: function(val) { return val * 1.8 + 32; },
    ['F,C']: function(val) { return ( val - 32 ) / 1.8; },
    ['K,C']: function(val) { return val - 273.15; },
    ['C,K']: function(val) { return val + 273.15; }
};

let temperature = function (val, inputFormat, outputFormat) {

    const inputFormatClean = cleanFormat(inputFormat);
    const outputFormatClean = cleanFormat(outputFormat);
    const ioConcat = inputFormatClean + "," + outputFormatClean;

    return conversions[ioConcat](val);
};

let cleanFormat = function (input) {

    if(!typeof input === 'string'){
        console.warn('ERROR: input/output only supports strings');
    }
    
    input.substring(0,1).toUpperCase();

    return input;
};

export default temperature;