const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function acquireReading() {
    return reading;
}

function baseRate(month, year) {
    return 2;
}

function taxThreshold(year) {
    return 0
}

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
const aReading = acquireReading();
const baseCharge = calculateBaseCharge(aReading);
const taxableCharge = Math.max(0, baseCharge - taxThreshold(aReading.year))

console.log('baseCharge', baseCharge);
console.log('taxalbeCharge', taxableCharge);
