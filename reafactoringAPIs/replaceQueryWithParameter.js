if(thePlan.targetgetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat();
else if(thePlan.targetgetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool();
else setOff();

class HeatingPlan {
    get targetTemperature() {
        return this.targetgetTemperature(thermostat.selectedTemperature);
    }
    targetgetTemperature(selectedTemperature) {
        if(selectedTemperature > this._max) return this._max;
        else if(selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

// if(thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
// else if(thermostat.selectedTemperature < thermostat.currentTemperature) setToCool();
// else setOff();

// class HeatingPlan {
//     get targetTemperature() {
//         if(thermostat.selectedTemperature > this._max) return this._max;
//         else if(thermostat.selectedTemperature < this._min) return this._min;
//         else return thermostat.selectedTemperature;
//     }
// }