import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('name'));
    const token = JSON.parse(localStorage.getItem('token'));
    if (user && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${token['token']}`
        }
      });
    }
    return next.handle(request);
  }
  constructor() { }
}
