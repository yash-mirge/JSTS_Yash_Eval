function totalDeposit(transaction,...amt){
    const sum=amt.reduce((tot,amount)=>{
        return tot+amount;
    },transaction);
    console.log(sum);
}

totalDeposit(100,500,400,900);
