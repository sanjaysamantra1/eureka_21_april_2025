import { HttpClient } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo3',
  imports: [],
  templateUrl: './signal-demo3.component.html',
  styleUrl: './signal-demo3.component.css'
})
export class SignalDemo3Component {
  userId = signal(1);
  userData: any;

  userDetailsEffect = effect(() => { // this logic gets executed everytime userId changes
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  constructor(private httpClient: HttpClient) {
  }
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData = response;
    })
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }
}
