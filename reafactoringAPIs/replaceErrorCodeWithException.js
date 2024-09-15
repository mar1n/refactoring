function localShipping(country) {
    const data = countryData.shippingRules[country];
    if(data) return new ShippingRules(data);
    else throw new OrderProCessingError(-23);
}

function calculateShippingCosts(anOrder) {
    const shippingRules = localShipping(anOrder.country);
    if(shippingRules < 0) return shippingRules;
}
try {
    calculateShippingCosts(orderData);
} catch (error) {
    if(e instanceof OrderProcessingError)
        errorList.push({order: orderData, errorCode: error.code});
    throw error;
}
if(_status < 0) errorList.push({order: orderData, errorCode: _status});

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`Order processing error ${errorCode}`);
        this.code = errorCode;
    }
    get name() {return "OrderProcessingError"}
}
// function localShipping(country) {
//     const data = countryData.shippingRules[country];
//     if(data) return new ShippingRules(data);
//     else return -23;
// }

// function calculateShippingCosts(anOrder) {
//     const shippingRules = localShipping(anOrder.country);
//     if(shippingRules < 0) return shippingRules;
// }

// const _status = calculateShippingCosts(orderData);
// if(_status < 0) errorList.push({order: orderData, errorCode: _status})