import { Component } from '@angular/core';
import { MaterialDemo1Component } from './components/material-demo1/material-demo1.component';

@Component({
  selector: 'app-root',
  imports: [
    MaterialDemo1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_may_2025_2';
  cars = ['Tata', 'Honda'];

  add(a: number, b: number) {
    return a + b;
  }
  addNewCar(newCar: string) {
    this.cars.push(newCar)
  }
}
