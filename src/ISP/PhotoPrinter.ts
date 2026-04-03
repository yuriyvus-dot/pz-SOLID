import {IPrinter, IScanner} from "./isp_good.js";

export class PhotoPrinter implements IPrinter, IScanner {
    print(message: string) {console.log(`And then I print this message - ${message}`)}
    scan(message: string) { console.log(`At first I am scan this message - ${message}`) }
}