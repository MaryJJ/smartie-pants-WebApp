import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants, User } from '@app/@core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Credentials, CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private credentialsService: CredentialsService,
    private http: HttpClient
  ) {}

  login(context: LoginContext): Observable<User> {
    return this.http
      .post<any>(
        Constants.LOGIN_URL,
        { email: context.username, password: context.password },
        { observe: 'response' }
      )
      .pipe(
        map((resp) => {
          const credentials: Credentials = {
            username: `${resp.body.name}`,
            token: this.getToken(resp.headers.get('Authorization')),
          };
          this.credentialsService.setCredentials(credentials, context.remember);
          return resp.body;
        })
      );
  }

  logout(): void {
    this.credentialsService.setCredentials();
  }

  register(user: any): Observable<User> {
    return this.http.post<User>(Constants.REGISTER_URL, user);
  }

  private getToken(data: string): string {
    const token = data.split(' ');
    return token.length > 0 ? token[1] : null;
  }
}
