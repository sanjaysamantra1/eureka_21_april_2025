import { Injectable } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor() { }
  
  showError(msg: string) {
    new Snackbar(msg,
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
