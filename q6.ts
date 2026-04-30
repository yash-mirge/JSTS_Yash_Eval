function getAccountInfo<T>(info: T): T{
    return info;
}

console.log("Account Holder: "+getAccountInfo<string>("Yash"));
console.log("Account Number: "+getAccountInfo<number>(111));
console.log("Balance: "+getAccountInfo<number>(300000));