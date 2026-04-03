import {User} from "./srp_good.js";

export class UserRepository {
    save(user: User) {
        console.log(`Saving ${user.name} to DB...`)
    }
}
