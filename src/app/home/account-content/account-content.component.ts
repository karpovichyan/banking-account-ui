import {Component, Input, OnInit} from '@angular/core';
import {UserAccount} from '../../model/user-account';

@Component({
  selector: 'app-account-content',
  templateUrl: './account-content.component.html',
  styleUrls: ['./account-content.component.css']
})
export class AccountContentComponent implements OnInit {

  @Input() userAccount: UserAccount;

  constructor() { }

  ngOnInit(): void {
  }

}
