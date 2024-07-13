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

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer};
    get quantity() {return this._quantity};
    get month() {return this._month};
    get year() {return this._year};
    get baseCharge() { return 2 * this._quantity};
    get taxableCharge() {return Math.max(0, this.baseCharge - 0) }
}
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;

console.log('basicChargeAmount', basicChargeAmount);
console.log('taxalbeCharge', taxableCharge);
