import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const user = JSON.parse(localStorage.getItem('name'));
      const token = JSON.parse(localStorage.getItem('token'));
      if (user && token) {
        if (request.method === 'GET') {
          request = request.clone({
            setHeaders: {
              Authorization: `Token ${token['token']}`
            },
            params: (request.params ? request.params : new HttpParams())
              .set('franchise', localStorage.getItem('franchise'))
          });
        } else {
          request = request.clone({
            setHeaders: {
              Authorization: `Token ${token['token']}`
            }
          });
        }
      }
      return next.handle(request);
  }
  constructor() {}
}
