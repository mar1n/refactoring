class Person {
    constructor(name) {
        this._name = name;
        this._department = new Department();
    }
    get name() {return this._name};
    get department() { return this._department};
    set department(arg) {this._department = arg };
    get manager() { return this._department.manger};
}

class Department {
    get chargeCode() {return this._chargeCode};
    set chargeCode(arg) { this._chargeCode = arg};
    get manger() { return this._manger};
    set manger(arg) { this._manger = arg};
}