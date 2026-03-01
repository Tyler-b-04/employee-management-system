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
