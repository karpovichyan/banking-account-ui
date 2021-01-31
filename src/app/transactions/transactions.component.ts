import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransactionForm} from '../model/transaction-form';
import {TransactionService} from '../service/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  onSubmit() {
    const transactionForm: TransactionForm = {
      fromAccountId: this.form.get('fromAccount').value,
      toAccountId: this.form.get('toAccount').value,
      amount: this.form.get('amount').value
    };
    this.transactionService.createTransaction(transactionForm).subscribe(id => {
      alert('success');
    });
  }
}
