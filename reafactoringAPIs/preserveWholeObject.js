const low = tempRange.low;
const high = tempRange.high;
class HeatingPlan {
    xxNEWwithRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = this.withinRange(low, high);
        return isWithinRange;
    }
}
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithRange(low, high);
if(!isWithinRange)
    alerts.push("room temperature went outside range");

// const low = aRoom.daysTempRange.low;
// const high = aRoom.daysTempRange.high;
// if(!aPlan.withinRange(low, high))
//     alerts.push("room temperature went outside range");
//A Variation to Create the New Function

if(!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("room temperature went outside range");

class HeatingPlan {
    withinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) && (this._temperatureRange.high <= this._temperatureRange.high);
    }
}
// const low = aRoom.daysTempRange.low;
// const high = aRoom.daysTempRange.high;

// if(!aPlan.withinRage(low, high))
//     alerts.push("room temperature went outside range");

// class HeatingPlan {
//     withinRange(bottom, top) {
//         return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
//     }
// }