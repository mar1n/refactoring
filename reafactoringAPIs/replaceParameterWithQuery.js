class Order {
    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }
    get discountLevel() {
        return (this.quantity > 100) ? 2 : 1;
    }

    discountedPrice(basePrice) {
        switch(this.discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}
// class Order {
//     get finalPrice() {
//         const basePrice = this.quantity * this.itemPrice;
//         let discountLevel;
//         if(this.quantity > 100) discountLevel = 2;
//         else discountLevel = 1;
//         return this.discountedPrice(basePrice, discountLevel);
//     }

//     discountedPrice(basePrice, discountedLevel) {
//         switch(discountedLevel) {
//             case 1: return basePrice * 0.95;
//             case 2: return basePrice * 0.9;
//         }
//     }
// }