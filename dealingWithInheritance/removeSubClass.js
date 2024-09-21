function createPerson(aRecord) {
        switch(aRecord.gender) {
            case "M": return new Male(aRecord.name, "M");
            case "F": return new Female(aRecord.name, "F");
            default: return new Person(aRecord.name, "X");
        }
}

function createMale(name) {
    return new Male(name);
}

function createFemale(name) {
    return new Female(name);
}

function loadFormInput(data) {
    data.map(aRecord => createPerson(aRecord));
}

class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }
    get name() {return this._name};
    get genderCode() {return this._genderCode};
    get isMale() { return this instanceof Male};
}

class Male extends Person {
    get genderCode() { return "M"};
}

class Female extends Person {
    get genderCode() { return "F"};
}

function isMale() { return "M" === this._genderCode};

const numberOfMales = people.filter(p => p.isMale).length;
// class Person {
//     constructor(name) {
//         this._name = name;
//     }
//     get name() {return this._name};
//     get genderCode() {return "X"};
// }

// class Male extends Person {
//     get genderCode() { return "M"};
// }

// class Female extends Person {
//     get genderCode() { return "F"};
// }

// const numberOfMales = people.filter(p => p instanceof Male).length;
