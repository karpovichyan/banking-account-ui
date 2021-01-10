import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth.service';
import {RegisterForm} from '../model/register-form';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const registerFrom: RegisterForm = {
        firstName: this.form.get('firstname').value,
        lastName: this.form.get('lastname').value,
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      };
      this.authService.register(registerFrom).subscribe(_ => this.router.navigate(['/login']));
    }
  }
}
