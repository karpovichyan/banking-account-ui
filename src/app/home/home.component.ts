import {Component, OnInit} from '@angular/core';
import {AccountService} from '../service/account.service';
import {UserAccount} from '../model/user-account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userAccounts: UserAccount[] = [];
  selectedUserAccount: UserAccount;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.accountService.getAccountsForUser(userId).subscribe(result => this.userAccounts = result);
  }

  onSelect(event) {
    this.selectedUserAccount = event;
  }
}
