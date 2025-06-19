import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { fetchEmployees, deleteEmployee } from '../../ngrx/actions/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees$: Observable<Employee[]> | undefined;

  constructor(private store: Store<{ employees: Employee[] }>) {
    this.employees$ = this.store.select(state => state.employees);
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: string) {
    const flag = confirm('Are you sure, You want to delete this record?')
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
