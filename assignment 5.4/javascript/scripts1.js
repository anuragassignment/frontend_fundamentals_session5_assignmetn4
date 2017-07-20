// Contstructor Object Patter for the Employee Object

function Employee (userName, skills, basicSalary){

       this.userName = userName;
       this.skills = skills;
       this.basicSalary = basicSalary;
}
// printDetails function 
Employee.prototype.printDetails = function (){

	alert( 'userName: ' + this.userName + ' | skills: '+ this.skills.join(' & ') + ' | basicSalary: '+ this.basicSalary);

 }
 // changeSalary function
Employee.prototype.changeSalary = function(salaryChange){
         this.basicSalary = salaryChange;
}

//new object created using object constructor pattern
var JohnDoe = new Employee('John Doe',['Developer','Designer'],50000);

// changeSalary function invoked
JohnDoe.changeSalary(80000);

//Details printed
JohnDoe.printDetails();