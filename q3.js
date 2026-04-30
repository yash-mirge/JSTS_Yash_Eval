var Account = /** @class */ (function () {
    function Account(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    return Account;
}());
var a1 = new Account(122, "Yash", 30000);
console.log(a1);
