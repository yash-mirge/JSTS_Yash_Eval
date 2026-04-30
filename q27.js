function TransactionStatus(amt){
    return new Promise((resolve,reject)=>{
        if (amt>=50000) {
            resolve ("Your Transaction has Approved..");
        }
        else{
            reject("Your Transaction has Rejected.");
        }
    });
}

TransactionStatus(500000).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})