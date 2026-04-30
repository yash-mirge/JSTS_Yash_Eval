function atmTransaction(amount) {
    balance=10000;
    if (amount>balance) {
        throw new Error("Transaction failed due to sever issues.");
    }
    else{
        console.log("Cash Withdrawn Successfully");
    }
}
function withdraw(){
    try {
        atmTransaction(20000000);        
    } catch (error) {
        console.log(error.message);
    }
}

withdraw();