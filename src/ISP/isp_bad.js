class BasicPrinter {
    print(message) { console.log(`I print the next message - ${message}`); }
    scan(message) { throw new Error("Not supported"); }
    fax(message) { throw new Error("Not supported"); }
}
const basecprinter = new BasicPrinter();
basecprinter.print("Hello I am a PRINTER");
basecprinter.fax("fax");
basecprinter.scan("scan");
export {};
//# sourceMappingURL=isp_bad.js.map