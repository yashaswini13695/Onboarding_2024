import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('authToken');

    // Clone the request to add the new header
    const clonedRequest = token ? request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
     }) : request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
    }
}
