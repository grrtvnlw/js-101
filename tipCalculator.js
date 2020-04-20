// Part 1
let tip = 0;

function tipAmount(billAmount, levelOfService) {
    if (levelOfService === "good") {
        tip = billAmount * .20;
        return tip;
    }
    else if (levelOfService === "fair") {
        tip = billAmount * .15;
        return tip;
    }
    else if (levelOfService === "bad") {
        tip = billAmount * .10;
        return tip;
    }
}

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

// Part 2
function totalAmount(billAmount, levelOfService) {
    return tipAmount(billAmount, levelOfService) + billAmount;
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));

// Part 3
function splitAmount(billAmount, levelOfService, numberOfPeople) {
    return totalAmount(billAmount, levelOfService) / numberOfPeople;
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));