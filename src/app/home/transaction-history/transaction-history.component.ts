import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  dataSource: any;
  displayedColumns: any;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter($event: KeyboardEvent) {
    
  }
}
