import {UserRepository} from "./UserRepository.js";
import {UserView} from "./UserView.js";


export class User {
    constructor(public name: string, public email: string) {}
}

const user = new User("Bohdan", "bhbjbhjbh@gmail.com");
const userRepository = new UserRepository();

userRepository.save(user);

const  userView = new UserView();
console.log(userView.toHtml(user));