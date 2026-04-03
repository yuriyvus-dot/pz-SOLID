import { PayPalPayment } from "./PayPalPayment.js";
import { Cart } from "./Cart.js";
import { CreditCardPayment } from "./CreditCardPayment.js";
const cart = new Cart();
cart.pay(new CreditCardPayment());
cart.pay(new PayPalPayment());
//# sourceMappingURL=dip_good.js.map