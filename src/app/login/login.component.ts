import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginForm} from '../model/login-form';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginForm: LoginForm = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    };
    this.authService.login(loginForm).subscribe(id => {
      console.log(id);
      this.router.navigate(['home']);
    }, error => {
      if (error.status === 404) {
        this.form.get('email').setErrors({userNotFound: true});
      }
      if (error.status === 401) {
        this.form.get('password').setErrors({wrongPassword: true});
      }
    });
  }
}
