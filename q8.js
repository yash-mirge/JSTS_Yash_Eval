var CustomerSupportexecutive = /** @class */ (function () {
    function CustomerSupportexecutive(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }
    CustomerSupportexecutive.prototype.displayInfo = function () {
        console.log("Name: " + this.name + " Employee ID: " + this.employeeId + " Department: " + this.department + " Experience: " + this.experience);
    };
    return CustomerSupportexecutive;
}());
var c1 = new CustomerSupportexecutive("Yash", 121, "Data Entry", 3);
c1.displayInfo();
