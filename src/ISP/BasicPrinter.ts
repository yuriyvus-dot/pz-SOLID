import {IPrinter} from "./isp_good.js";

export class BasicPrinter implements IPrinter{
    print(message: string) {console.log(`I can print - ${message}`)
    }
}