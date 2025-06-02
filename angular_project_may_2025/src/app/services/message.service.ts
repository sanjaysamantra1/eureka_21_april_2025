import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new Subject<any>(); 

  sendMessage(message: string) {
    this.messageSubject.next({ text: message });
  }

  clearMessages() {
    this.messageSubject.next(null);
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
