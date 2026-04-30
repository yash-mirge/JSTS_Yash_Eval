function withdrawAmount(limit,bal){
    if(limit<bal){
        throw new Error("You have Exceeded your daily limit");
    }
    else{
        console.log("Cash withdrawn successfully...");
    }
}

try {
    withdrawAmount(1000,5000);
} catch (error) {
    console.log(error.message);
}