import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count'); // selector
    console.log(this.count$)
  }

  incrementCount() {
    this.store.dispatch(increment());
  }
  decrementCount() {
    this.store.dispatch(decrement());
  }
  resetCount() {
    this.store.dispatch(reset());
  }
}
