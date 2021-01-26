import {Component, OnInit} from '@angular/core';
import {AccountService} from '../service/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAccountExist: boolean;
  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.accountService.isAccountExist(userId).subscribe(result => this.isAccountExist = result);
  }
}
