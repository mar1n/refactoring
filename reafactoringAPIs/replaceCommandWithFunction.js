const monthCharge = charge(customer, usage, provider);

function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
}

// const monthCharge = charge(customer, usage, provider);

// function charge(customer, usage, provider) {
//     return new ChargeCalculator(customer, usage, provider).charge;
// }

// class ChargeCalculator {
//     constructor (customer, usage, provider){
//       this._customer = customer;
//       this._usage = usage;
//       this._provider = provider;
//     }
//     get baseCharge() {
//       return this._customer.baseRate * this._usage;
//     }
//     get charge() {
//       return this.baseCharge + this._provider.connectionCharge;
//     }
//   }