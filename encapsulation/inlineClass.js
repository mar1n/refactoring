// class TrackingInformation {
    
//     get trackingNumber() { return this._trackingNumber};
//     set trackingNumber(arg) {return this._trackingNumber = arg};
//     get display() {
//         return `${this.shippingCompany}: ${this.trackingNumber}`;
//     }
// }

class Shipment {
    get shippingCompany() { return this._shippingCompany};
    set shippingCompany(arg) { return this._shippingCompany = arg};
    get trackingInformation() {return `${this.shippingCompany}: ${this.trackingNumber}`};
    get trackingNumber() { return this._trackingNumber};
    set trackingNumber(arg) { this._trackingNumber = arg};
}