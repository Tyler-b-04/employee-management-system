// Base Class
class {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  describe() {
    return `Employee: ${this.name} | Department: ${this.department}`;
  }
}
// Subclasses
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }
  describe() {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${teamSize}`
  }
}
// Company Class
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (const person of this.employees) {
      console.log(person.describe());
    }
  }
}
// Objects
const e1 = new Employee("Devon", "Janitor");
const e2 = new Employee("Justin", "IT");
const m1 = new Manager("Tyler", "Operations", 3);