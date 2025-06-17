import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
