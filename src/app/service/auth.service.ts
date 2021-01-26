import {Injectable} from '@angular/core';
import {RegisterForm} from '../model/register-form';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {LoginForm} from '../model/login-form';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(registerForm: RegisterForm): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/register`, registerForm);
  }

  login(loginForm: LoginForm): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/login`, loginForm);
  }
}
