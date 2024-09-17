class Employee {
    constructor(name, type) {
        this.validationType(type);
        this._name = name;
        this._type = type;
    }
    validationType(arg) {
        if(!["engineer", "manger", "salesman"].includes(arg))
            throw new Error(`Employee cannot be of type ${arg}`);
    }
    get type() { return this._type};
    set type(arg) { this._type = Employee.createEmployeeType(arg)};
    static createEmployeeType(aString) {
        switch(aString) {
            case "engineer": return new Engineer();
            case "salesman": return new Salesman();
            case "manger": return new Manger();
            default: throw new Error(`Employee cannot be of type ${aString}`);
        }
    }
    
    toString() {
        return `${this._name} (${this.type.capitalizedName})`;
    }
    get typeString() { return this._type.toString()}
}
class EmployeeType {
    get capitalizedName() {
        return this.toString.chartAt(0).toUpperCase() + this.toString.substr(1).toLowerCase();
    }
}
class Engineer extends EmployeeType {
    toString() {return "engineer"}
}
class Salesman extends EmployeeType {
    toString() {return "salesman"};
}
class Manager extends EmployeeType {
    toString() {return "manger"}
}
class EmployeeType {
    constructor(aString) {
        this._value = aString;
    }
    toString() {return this._value};
}
// class Employee {
//     constructor(name, type) {
//         this.validationType(type);
//         this._name = name;
//         this._type = type;
//     }
//     validationType(arg) {
//         if(!["engineer", "manger", "salesman"].includes(arg))
//             throw new Error(`Employee cannot be of type ${arg}`);
//     }
//     get type() { return this._type};
//     set type(arg) { this._type = arg};
//     get capitalizedType() {
//         return this._type.chartAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
//     }
//     toString() {
//         return `${this._name} (${this.capitalizedType})`;
//     }
// }
//Using Indirect Inheritance

class Employee {
    constructor(name) {
        this._name = name;
    }
    
    toString() {return `${this._name} (${this.type})`}
}
class Engineer extends Employee {
    get type() {
        return "engineer";
    }
}
class Salesman extends Employee {
    get type() {return "salesman"};
}
class Manager extends Employee {
    get type() { return "manger"};
}
function ereateEmplyoo(name, type) {
    switch(type) {
        case "engineer" : return new Engineer(name, type);
        case "salesman" : return new Salesman(name, type);
        case "manger" : return new Manager(name, type);
        default: throw Error(`Employee cannoy be of type ${type}`)
    }
}
// class Employee {
//     constructor(name, type) {
//         this.validateType(type);
//         this._name = name;
//         this._type = type;
//     }
//     validateType(arg) {
//         if(!["engineer", "manager", "salesman"].includes(arg))
//             throw new Error(`Employee cannot be of type ${arg}`);
//     }
//     toString() {return `${this._name} (${this._type})`}
// }

