import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.users = response;
    })
  }
}
