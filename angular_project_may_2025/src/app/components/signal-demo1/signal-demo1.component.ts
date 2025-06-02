import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.component.html',
  styleUrl: './signal-demo1.component.css'
})
export class SignalDemo1Component {
  cookieCount: WritableSignal<number> = signal(10);

  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
}
