import {PayPalPayment} from "./PayPalPayment.js";
import {Cart} from "./Cart.js"
import {CreditCardPayment} from "./CreditCardPayment.js"

export interface PaymentMethod {
    pay(): void;
}






const cart = new Cart();
cart.pay(new CreditCardPayment());
cart.pay(new PayPalPayment());
