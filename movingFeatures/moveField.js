// class Customer {
//     constructor(name, discountRate) {
//         this._name = name;
//         this._discountRate = discountRate;
//         this._contract = new CustomerContract(dateToday());
//     }
//     get discountRate() {return this._discountRate};
//     becomePreferred() {
//         this._discountRate += 0.03;
//     }
//     applyDiscount(amount) {
//         return amount.subtract(amount.multiplu(this._discountRate));
//     }
// }

// class CustomerContract {
//     constructor(startDate) {
//         this._startDate = startDate;
//     }
// }

// After refactoring
class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(dateToday(), discountRate);
        this._setDiscountRate(discountRate);
    }
    get discountRate() {return this._contract.discountRate};
    _setDiscountRate(aNumber) {this._contract.discountRate = aNumber};
    becomePreferred() {
        this._setDiscountRate(this.discountRate += 0.03);
    }
    applyDiscount(amount) {
        return amount.subtract(amount.multiplu(this.discountRate));
    }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }
    get discountRate() {return this._discountRate};
    set discountRate(arg) {this._discountRate = arg}
}
function dateToday() {
    return Date.now();
}

const customer = new Customer("Szymon", 10);
customer.becomePreferred()
console.log(customer);
console.log(customer.discountRate);

