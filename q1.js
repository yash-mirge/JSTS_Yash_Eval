const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"js_banks"
})

function connectDb() {
    db.connect((err)=>{
        if (err) {
            console.log(err);
        }
        else{
            console.log("Connected...");
        }
    })
}

 connectDb();

function insertRecords(acc_number, acc_holder, balance) {
    const bank = {acc_number, acc_holder, balance}
    db.query("insert into bank_records set ? ", bank, (err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log("Data Inserted");
        }
    })
}

 insertRecords(3,"Yash",80000);

function updateRecords(acc_number, acc_holder, balance) {
    const bank = {acc_holder, balance}
    db.query("update bank_records set ? where acc_number = ?",[bank, acc_number],(err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log("Data Updated");
        }
    })
}

// updateRecords(3,"Akash",12900);

function deleteRecords(acc_number){
    db.query("delete from bank_records where acc_number = ?",[acc_number],(err)=>{
        if (err) {
            console.log(err);
            
        } else {
            console.log("Data deleted");
            
        }
    })
}

deleteRecords(3);

function showRecords(){
    db.query("select * from bank_records", (err, result)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log(result);
            
        }
    })
}

 showRecords();