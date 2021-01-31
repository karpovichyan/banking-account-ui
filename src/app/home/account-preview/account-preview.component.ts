import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {UserAccount} from '../../model/user-account';


@Component({
  selector: 'app-account-preview',
  templateUrl: './account-preview.component.html',
  styleUrls: ['./account-preview.component.css']
})
export class AccountPreviewComponent implements OnInit {

  @Input() userAccount: UserAccount;
  @Output() selectedUserAccount = new EventEmitter<UserAccount>();
  constructor() { }

  ngOnInit(): void {
  }

  showMoreClick() {
    this.selectedUserAccount.emit(this.userAccount);
  }
}
