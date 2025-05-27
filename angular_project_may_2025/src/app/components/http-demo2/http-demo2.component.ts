import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee-model';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
      console.log(response);
      this.employees = response;
    })
  }
}
