export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  sal: number;

  constructor(id: number, firstName: string, lastName: string, sal: number, gender: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.sal = sal;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getYearlySalary(): number {
    return 12 * this.sal;
  }
}
