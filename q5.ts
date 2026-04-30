interface TransactionManagement{
    processTransaction() : void;
} 
class Clerk1 implements TransactionManagement{
    processTransaction() : void {
        console.log("Transaction in Processing...");
    }
}

const cl=new Clerk1();
cl.processTransaction();