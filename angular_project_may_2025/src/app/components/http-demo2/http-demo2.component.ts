import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.fetchEmployees();
    this.fetchUsers();
  }
  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((response: Employee[]) => {
      console.log(response);
      this.employees = response;
    })
  }
  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      console.log(response)
    })
  }
}
