const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar  = valueInEuro * 1.2;
    return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
};

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    
    return valueInPound;
};


const sum = (a,b) => {
  return a + b
};

console.log(sum(7,3));
console.log(fromDollarToYen(1))

module.exports = {sum, fromEuroToDollar} ;


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};