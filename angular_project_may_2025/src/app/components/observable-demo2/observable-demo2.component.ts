import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, fromEvent, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.forkjoin_demo();
    // this.mergeMap_demo();
    this.concatMap_demo();
  }

  forkjoin_demo() {
    const url1 = 'https://jsonplaceholder.typicode.com/users'; // 2
    const url2 = 'https://jsonplaceholder.typicode.com/comments'; // 3
    const url3 = 'ttps://jsonplaceholder.typicode.com/todos'; // 2
    let req1 = this.httpClient.get(url1);
    let req2 = this.httpClient.get(url2);
    let req3 = this.httpClient.get(url3);
    forkJoin([req1, req2, req3]).subscribe((responses) => {
      console.log(responses)
    }, (err) => {
      console.log(err)
    })
  }

  mergeMap_demo() {
    const userPublisher = of(1, 2, 3, 4, 5);
    // userPublisher.subscribe(val => console.log('user value: ', val));

    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });

  }
  concatMap_demo() {
    const userPublisher = of(1, 2, 3, 4, 5);
    // userPublisher.subscribe(val => console.log('user value: ', val));

    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });

  }

  @ViewChild('loginBtn') loginBtn!: ElementRef;
  ngAfterViewInit() {

    fromEvent(this.loginBtn.nativeElement, 'click').pipe(exhaustMap((val) => {
      return this.httpClient.get('https://fakestoreapi.com/products')
    })).subscribe({
      next: (res) => console.log('Response:', res),
      error: (err) => console.error('Error:', err),
    })

  }
}
