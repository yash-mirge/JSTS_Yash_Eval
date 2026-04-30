const customer=[
    {name:"Yash",transaction:2},
    {name:"Gautam",transaction:5},
    {name:"Sujeet",transaction:3}
];

function findTopCustomer(customer){
    return customer.reduce((max,curr)=>{
        if(curr.transaction>max.transaction){
            return curr;
        }
        else{
            return max;
        }
    });
}
console.log(findTopCustomer(customer));