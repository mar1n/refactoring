class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._adjustments = [];
    }
    get production() {
        return this._initialProduction + this._adjustments
        .reduce((sum, a) => sum + a.amount, 0)
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
    }
}

class ProductionPlan {
    constructor(production) {
        this._production = production;
        this._adjustments = [];
    }
    get production() {return thid._production};
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}


class ProductionPlan {
    get production() {
        return this._adjustments
        .reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
    }
}

// class ProductionPlan {
//     get production() {return this._production};
//     applyAdjustment(anAdjustment) {
//         this._adjustments.push(anAdjustment);
//         this._production += anAdjustment.amount;
//     }
// }