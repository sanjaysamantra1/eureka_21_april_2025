import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am Error Interceptor')
  const toastService = inject(ToastService);
  return next(req).pipe(catchError((error) => {
    toastService.showError(error.message);
    return EMPTY;
  }));
};
