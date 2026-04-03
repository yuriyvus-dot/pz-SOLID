import {ConfirmedOrder} from "./ConfirmedOrder.js";
import {DraftOrder} from "./DraftOrder.js"
import {Order} from "./Order.js";


const order = new ConfirmedOrder();
const order1 = new ConfirmedOrder();
const order2 = new Order();
const draftorder = new DraftOrder();

//ми не можемо засунути в масив ніякі об'єкти окрім ConfirmedOrder
const mas: ConfirmedOrder[] = [order, order1];
mas.forEach(o=> {o.markAsPaid();
    console.log(o.payed)})


