const accounts=[
    {name:"Yash",balance:5000},
    {name:"Gautam",balance:7000},
    {Name:"Sujeet",balance:3000},
];

const filterHighValueAccounts = accounts.filter(function filterHighValueAccounts(value) {
                    return value.balance > 4000;    
}) 

console.log(filterHighValueAccounts);
