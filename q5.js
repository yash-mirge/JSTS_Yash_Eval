var Clerk1 = /** @class */ (function () {
    function Clerk1() {
    }
    Clerk1.prototype.processTransaction = function () {
        console.log("Transaction in Processing...");
    };
    return Clerk1;
}());
var cl = new Clerk1();
cl.processTransaction();
