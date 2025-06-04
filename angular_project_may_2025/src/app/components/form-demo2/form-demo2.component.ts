import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css',
  standalone: true
})
export class FormDemo2Component {

  user = {
    name: 'sachin',
    email: 'sachin@gmail.com',
    gender: 'male',
    address: {
      street: '',
      city: '',
      pincode: '112233',
    }
  }

  submitUserForm(userForm: NgForm) {
    console.log(userForm);
    console.log(userForm.value);
  }
}
