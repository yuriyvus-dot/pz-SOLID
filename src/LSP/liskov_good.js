import { ConfirmedOrder } from "./ConfirmedOrder.js";
import { DraftOrder } from "./DraftOrder.js";
export class Order {
    id;
    items;
}
const order = new ConfirmedOrder();
const order1 = new ConfirmedOrder();
const order2 = new Order();
const draftorder = new DraftOrder();
//ми не можемо засунути в масив ніякі об'єкти окрім ConfirmedOrder
const mas = [order, order1];
mas.forEach(o => {
    o.markAsPaid();
    console.log(o.payed);
});
//# sourceMappingURL=liskov_good.js.map