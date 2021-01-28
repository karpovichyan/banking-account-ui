import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {NewAccountForm} from '../model/new-account-form';

@Injectable({providedIn: 'root'})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  isAccountExist(userId): Observable<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}/accounts/exist/${userId}`);
  }

  createAccount(newAccountForm: NewAccountForm): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/accounts`, newAccountForm);
  }
}
