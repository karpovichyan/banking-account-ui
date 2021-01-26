import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  isAccountExist(userId): Observable<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}/accounts/exist/${userId}`);
  }
}
