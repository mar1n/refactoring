class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode() {
        return this._telephoneNumber.areaCode
    }
    set officeAreaCode(arg) {
        this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }
    get officeNumber() {
        return this._telephoneNumber.number
    }
    set officeNumber(arg) {
        this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
    }
}

class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    } 
    get areaCode() {
        return this._areaCode;
    }
    set areaCode(arg) {
        return this._areaCode = arg;
    }
    get number() {
        return this._number;
    }
    set number(arg) {
        this._number = arg;
    }
}

// class Person {
//     constructor() {
//         this._telephoneNumber = new TelephoneNumber();
//     }
//     get officeAreaCode() {
//         return this._telephoneNumber.areaCode
//     }
//     set officeAreaCode(arg) {
//         this._telephoneNumber.areaCode = arg
//     }
//     get officeNumber() {
//         return this._telephoneNumber.number
//     }
//     set officeNumber(arg) {
//         this._telephoneNumber.number = arg
//     }
// }

// class TelephoneNumber {
//     get areaCode() {
//         return this._areaCode;
//     }
//     set areaCode(arg) {
//         return this._areaCode = arg;
//     }
//     get number() {
//         return this._number;
//     }
//     set number(arg) {
//         this._number = arg;
//     }
// }