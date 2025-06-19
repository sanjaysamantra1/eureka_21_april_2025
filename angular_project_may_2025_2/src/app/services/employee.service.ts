import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  fetchAllEmployees() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: number) {
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`);
  }
  addEmployee(newEmp: Employee) {
    return this.httpClient.post(`http://localhost:3000/employees`, newEmp);
  }
}
