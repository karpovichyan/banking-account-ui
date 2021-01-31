import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {NewAccountForm} from '../model/new-account-form';
import {UserAccount} from '../model/user-account';

@Injectable({providedIn: 'root'})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  getAccountsForUser(userId: string): Observable<UserAccount[]> {
    const options = {
      params: new HttpParams().set('userId', userId)
    };
    return this.http.get<UserAccount[]>(`${environment.apiUrl}/accounts`, options);
  }

  createAccount(newAccountForm: NewAccountForm): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/accounts`, newAccountForm);
  }
}
