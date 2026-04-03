import {User} from "./srp_good.js";

export class UserView {
    toHtml(user: User) { return `<div>${user.name}</div>`; }
}
