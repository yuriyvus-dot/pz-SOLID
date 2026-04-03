import { Scanner } from "./Scanner.js";
import { PhotoPrinter } from "./PhotoPrinter.js";
import { BasicPrinter } from "./BasicPrinter.js";
const basicP = new BasicPrinter();
basicP.print("Hello!");
const scan = new Scanner();
scan.scan("Hello!");
const photoprinter = new PhotoPrinter();
photoprinter.scan("Hello");
photoprinter.print("Hello");
//# sourceMappingURL=isp_good.js.map