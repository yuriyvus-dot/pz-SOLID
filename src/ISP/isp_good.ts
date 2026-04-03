import {Scanner} from "./Scanner.js";
import {PhotoPrinter} from "./PhotoPrinter.js";
import {BasicPrinter} from "./BasicPrinter.js"

export interface IPrinter { print(message : string): void; }
export interface IScanner { scan(message : string): void; }



const basicP = new BasicPrinter()
basicP.print("Hello!")
const scan = new Scanner()
scan.scan("Hello!")

const photoprinter = new PhotoPrinter()
photoprinter.scan("Hello")
photoprinter.print("Hello")
