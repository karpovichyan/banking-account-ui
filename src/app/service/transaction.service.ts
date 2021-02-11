import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TransactionForm} from '../model/transaction-form';
import {TransactionHistory} from '../model/transaction-history';

@Injectable({providedIn: 'root'})
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  createTransaction(transactionForm: TransactionForm): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/transactions`, transactionForm);
  }

  getTransaction(accountId: number): Observable<TransactionHistory[]> {
    const options = {
      params: new HttpParams().set('accountId', String(accountId))
    };
    return this.http.get<TransactionHistory[]>(`${environment.apiUrl}/transactions`, options);
  }
}
