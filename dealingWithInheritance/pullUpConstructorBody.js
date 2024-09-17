class Party {
    constructor(name) {
        this._name = name;
    }
};

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this.monthlyCost = monthlyCost;
    }
}

class Department extends Party {
    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }
}
// class Party {};

// class Employee extends Party {
//     constructor(name, id, monthlyCost) {
//         super();
//         this._id = id;
//         this._name = name;
//         this.monthlyCost = monthlyCost;
//     }
// }

// class Department extends Party {
//     constructor(name, staff) {
//         super();
//         this._name = name;
//         this._staff = staff;
//     }
// }