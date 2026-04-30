function account(transaction) {
    if (!transaction) {
        throw new Error("Account is already closed.");
    } else {
        console.log("Account closed successfully.");
    }
}

try {
    accountClose(false);
} catch (error) {
    console.log(error.message);
}
finally{
    console.log("Accound records Updated!!");
}