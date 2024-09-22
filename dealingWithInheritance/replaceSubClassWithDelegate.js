function createBird(data) {
    return new Bird(data);
}

class Bird {
    constructor(data) {
        this._name = data.name;
        this._plumage = data.plumage;
        this._speciesDelegate = this.selectSpeciesDelegate(data)
    }

    selectSpeciesDelegate(data) {
        switch(data.type) {
            case 'EuropeanSwallow':
                return new EuropeanSwallowDelegate(data, this);
            case 'AfricanSwallow':
                return new AfricanSwallowDelegate(data, this);
            case 'NorwegianBlueParrot':
                return new NorwegianBlueParrot(data, this);
            default: return new SpeciesDelegate(data, this);
        }
    }
    get name() {return this._name};
    get plumage() {
        return this._speciesDelegate.plumage
    }
    get airSpeedVelocity() {
        return this._speciesDelegate.airSpeedVelocity
    };
}

class NorwegianBlueParrot extends Bird {
    constructor(data) {
        super(data);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }
    get plumage() {
        if(this._voltage > 100) return "scorched";
        else return this._plumage || "beautiful";
    }
    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
    get airSpeedVelocity() {return 35};
}
class AfricanSwallowDelegate extends SpeciesDelegate {
    constructor(data, bird) {
        super(data, bird)
        this._numberOfCoconuts = data.numberOfCoconuts;
    }
    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts;
    }
}
class NorwegianBlueParrotDelegate extends SpeciesDelegate {
    constructor(data, bird) {
        super(data, bird)
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }
    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }
    get plumage() {
        if(this._voltage > 100) return "scorched";
        else return this._bird._plumage || "beautiful";
    }
}

class SpeciesDelegate {
    constructor(data, bird) {
        this._bird = bird;
    }
    get plumage() {
        return this._bird._plumage || "average";
    }
    get airSpeedVelocity() { return null};
}
// function createBird(data) {
//     switch(data.type) {
//         case 'EuropeanSwallow':
//             return new EuropeanSwallow(data);
//         case 'AfricanSwallow':
//             return new AfricanSwallow(data);
//         case 'NorweigianBlueParrot':
//             return new NorwegianBlueParrot(data);
//         default:
//             return new Bird(data);
//     }
// }

// class Bird {
//     constructor(data) {
//         this._name = data.name;
//         this._plumage = data.plumage;
//     }
//     get name() {return this._name};
//     get plumage() {
//         return this._plumage || "average";
//     }
//     get airSpeedVelocity() {return null};
// }

// class EuropeanSwallow extends Bird {
//     get airSpeedVelocity() {return 35};
// }

// class AfricanSwallow extends Bird {
//     constructor(data) {
//         super(data)
//         this._numberOfCoconuts = data.numberOfCoconuts;
//     }
//     get airSpeedVelocity() {
//         return 40 - 2 * this._numberOfCoconuts;
//     }
// }

// class NorwegianBlueParrot extends Bird {
//     constructor(data) {
//         super(data);
//         this._voltage = data.voltage;
//         this._isNailed = data.isNailed;
//     }
//     get plumage() {
//         if(this._voltage > 100) return "scorched";
//         else return this._plumage || "beautiful";
//     }
//     get airSpeedVelocity() {
//         return (this._isNailed) ? 0 : 10 + this._voltage / 10;
//     }
// }

//REPLACING a HIERARCHY

class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }
    get hasTalkBack() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasTalkback
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice() {
        let result = this._show.price;
        if(this.isPeakDay) result += Math.round(result * 0.15);
        return (this._premiumDelegate)
            ? this._premiumDelegate.extendBasePrice(result)
            : result;
    }
    get _privateBasePrice() {
        let result = this._show.price;
        if(this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras)
    }
    get hasDinner() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasDinner
            : undefined;
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }
    get hasTalkback() {
        return this._host._show.hasOwnProperty('talkback');
    }
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
    }
}

aBooking = createBooking(show, date);

aBookingPremium = createPremiumBooking(show, date, extras);

function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result._bePremium(extras);
    return result;
}

// class Booking {
//     constructor(show, date) {
//         this._show = show;
//         this._date = date;
//     }
//     get hasTalkBack() {
//         return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
//     }
//     get basePrice() {
//         let result = this._show.price;
//         if(this.isPeakDay) result += Math.round(result * 0.15)
//             return result;
//     }
// }

// class PremiumBooking extends Booking {
//     constructor(show, date, extras) {
//         super(show, date);
//         this._extras = extras;
//     }
//     get basePrice() {
//         return Math.round(super.basePrice + this._extras.premiumFee);
//     }
//     get hasTalkback() {
//         return this._show.hasOwnProperty('talkback');
//     }
//     get hasDinner() {
//         return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
//     }
// }

// aBooking = new Booking(show, date);

// aBookingPremium = new PremiumBooking(show, date, extras);