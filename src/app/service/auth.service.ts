import {Injectable} from '@angular/core';
import {RegisterForm} from '../model/register-form';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(registerForm: RegisterForm): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/register', registerForm);
  }
}
