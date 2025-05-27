import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log('I am Auth interceptor');
  // const myToken = sessionStorage.getItem('myToken');
  const myToken = 'ABCDEF123456';
  const requestWithToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  });
  return next(requestWithToken);
};
