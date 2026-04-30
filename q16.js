function checkBalance(Insufficientbalance){
    if (!Insufficientbalance) {
        throw new Error("Insufficient Balance! Please Deposit Money in your Bank Account")
    } else {
        console.log("Account has Sufficient Balance")
    }
}

try {
    checkBalance(false);
} catch (error) {
    console.log(error.message);
}