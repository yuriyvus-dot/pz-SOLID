class CreditCardPayment {
    pay() {
        console.log('Paying with credit card');
    }
}
class Cart {
    payment;
    constructor() {
        this.payment = new CreditCardPayment();
    }
    checkout() {
        this.payment.pay();
    }
}
const cart = new Cart();
cart.checkout();
export {};
//# sourceMappingURL=dip_bad.js.map