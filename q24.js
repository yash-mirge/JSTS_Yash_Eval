const account1=[
    {name:"Yash",balance:5000},
    {name:"Gautam",balance:7000},
    {name:"Sujeet",balance:3000}
];

//1
const addInterest = account1.map((acc)=>{
            return acc.balance + (acc.balance*0.5)
})
console.log(addInterest);

//2
const fetchHighBalance=account1.filter((acc)=>{
        return acc.balance > 4000;
});
console.log(fetchHighBalance);

//3
const totalDeposits=account1.reduce((tot,acc)=>{
    return tot +acc.balance;
},0);
console.log(totalDeposits);
