function fetchBalance(id){
    return new Promise((resolve,reject)=>{
        if (id==121) {
            resolve ([{name:"Yash",balance:5000}]);
        } else {
            reject ("Invalid Id");
        }
    });
}
async function custBal(){
    try {
        const b= await fetchBalance(121);
        console.log(b);
    } catch (error) {
        console.log(error);
    }
}

custBal();