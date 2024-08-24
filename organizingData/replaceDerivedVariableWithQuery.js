class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._productionAccumulator = 0;
        this._adjustments = [];
    }
    get production() {
        assert(this._productionAccumulator === this.calculatedProductionAccumulator);
        return this._initialProduction + this._productionAccumulator
    }
    get calculatedProductionAccumulator() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0)
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
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