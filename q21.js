const calculateInterest=(balance)=>{
    if (balance>5000) {
        return bal*0.07;
    } else {
        return bal*0.05;
    }
}

console.log(calculateInterest(5000));
