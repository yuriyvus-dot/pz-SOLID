import {IScanner} from "./isp_good.js";

export class Scanner implements IScanner{
    scan(message: string) {console.log(`I can scan - ${message}`)
    }
}

