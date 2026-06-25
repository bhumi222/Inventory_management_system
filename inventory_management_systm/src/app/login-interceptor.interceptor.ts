import { HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
