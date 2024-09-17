class Party {
    get monthlyCost() {
        throw new SubclassResponsibilityError();
    }
}

class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

// class Employee extends Party {
//     get annualCost() {
//         return this.monthlyCost * 12;
//     }
// }

// class Department extends Party {
//     get totalAnnualCost() {
//         return this.monthlyCost * 12;
//     }
// }

