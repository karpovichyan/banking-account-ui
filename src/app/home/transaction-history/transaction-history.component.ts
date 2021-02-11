import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TransactionHistory} from '../../model/transaction-history';
import {DataSource} from '@angular/cdk/collections';
import {TransactionService} from '../../service/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit, OnChanges {
  @Input() accountId: number;
  dataSource: TransactionHistory[];
  displayedColumns: string[] = ['fromAccountId', 'toAccountId', 'amount', 'date'];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
  }

  applyFilter($event: KeyboardEvent) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.accountId) {
      this.transactionService.getTransaction(this.accountId).subscribe(value => this.dataSource = value);
    }
  }
}
