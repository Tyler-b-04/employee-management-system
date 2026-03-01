// Base classes
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
