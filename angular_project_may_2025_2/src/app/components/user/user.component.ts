import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any;

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe((response: any) => {
      this.users = response;
    });
  }
}
