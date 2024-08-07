class Person {
    constructor(name) {
        this._telephoneNumber = new TelephoneNumber();
        this._name = name;
    }
    get name() { return this._name};
    set name(arg) {this._name = arg};
    get telephoneNumber() {return this._telephoneNumber.toString()}
    get officeAreaCode() { return this._telephoneNumber.areaCode};
    set officeAreaCode(arg) {return this._telephoneNumber.areaCode = arg};
    get officeNumber() { return this._telephoneNumber.number};
    set officeNumber(arg) { this._telephoneNumber.number = arg};
}

class TelephoneNumber {
    get areaCode() {return this._areaCode};
    set areaCode(arg) {this._areaCode = arg};
    get number() {return this._number};
    set number(arg) { this._number = arg};
    toString() {return `(${this.areaCode}) ${this.number}`};
}