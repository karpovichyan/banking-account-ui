import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TransactionForm} from '../model/transaction-form';

@Injectable({providedIn: 'root'})
export class TransactionService {

  constructor(private http: HttpClient) {
  }

  createTransaction(transactionForm: TransactionForm): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/transactions`, transactionForm);
  }
}
