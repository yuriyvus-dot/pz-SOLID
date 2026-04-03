import { UserRepository } from "./UserRepository.js";
import { UserView } from "./UserView.js";
export class User {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const user = new User("Bohdan", "bhbjbhjbh@gmail.com");
const userRepository = new UserRepository();
userRepository.save(user);
const userView = new UserView();
console.log(userView.toHtml(user));
//# sourceMappingURL=srp_good.js.map