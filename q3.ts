class Account{
    accountNumber : number;
    holderName : string;
    balance : number;
    constructor(accountNumber : number, holderName : string ,balance : number){
        this.accountNumber=accountNumber;
        this.holderName=holderName;
        this.balance=balance;
    }
}

const a1=new Account(122,"Yash",30000);
console.log(a1);