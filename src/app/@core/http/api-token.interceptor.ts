import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const credentialsKey = 'credentials';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.indexOf(environment.serverUrl)) {
      const savedCredentials =
        sessionStorage.getItem(credentialsKey) ||
        localStorage.getItem(credentialsKey);
      if (savedCredentials) {
        const credentials = JSON.parse(savedCredentials);
        const token = credentials.token;
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
      }
    }
    return next.handle(request);
  }
}
