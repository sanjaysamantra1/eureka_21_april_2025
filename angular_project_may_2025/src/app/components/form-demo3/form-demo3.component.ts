import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('Sachin', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('sachin@gmail.com'),
      gender: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(),
      })
    });
  }

  submitUserForm() {
    console.log(this.userForm)
  }
}
