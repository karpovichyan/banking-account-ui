import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {LoginForm} from '../../model/login-form';
import {NewAccountForm} from '../../model/new-account-form';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  selectedAccountType = 'SAVING';

  constructor(private accountService: AccountService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createAccount() {
    const newAccountForm: NewAccountForm = {
      userId: localStorage.getItem('userId'),
      accountType: this.selectedAccountType
    };
    this.accountService.createAccount(newAccountForm).subscribe(_ => {
        this.router.navigate(['home']);
      }, error => {
        if (error.status === 404) {
          // TODO handle user not found exception
        }
      }
    );
  }

  onChange(event) {
    this.selectedAccountType = event.value;
  }
}
