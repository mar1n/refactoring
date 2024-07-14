import _ from "lodash"
const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function baseCharge(reading) {
    return 2 * reading.quantity;
}

function taxableCharge(reading) {
    return Math.max(0, baseCharge(reading) - 0);
}

function enrichReading(argReading) {
    const result = _.cloneDeep(argReading);
    result.baseCharge = baseCharge(result);
    result.taxableCharge = taxableCharge(result);
    return result;
}

console.log("enrichReading", enrichReading(reading));