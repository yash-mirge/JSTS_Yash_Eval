class CustomerSupportexecutive {
    name : string;
    employeeId : number;
    department : string;
    experience : number;

    constructor(name : string, employeeId : number, department : string, experience : number){
        this.name=name;
        this.employeeId=employeeId;
        this.department=department;
        this.experience=experience;
    }
    displayInfo() : void{
        console.log("Name: "+this.name+" Employee ID: "+this.employeeId+" Department: "+this.department+" Experience: "+this.experience);
    }
}

const c1 = new CustomerSupportexecutive("Yash",121,"Data Entry",3);
c1.displayInfo();