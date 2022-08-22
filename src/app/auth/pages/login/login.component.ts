import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      PasswordValidator.minLength,
      PasswordValidator.upperCase,
      PasswordValidator.numbers,
      PasswordValidator.specialCharacter,
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    if (this.loginForm.valid) {
      this.authService.login(username, password).subscribe(() => {
        this.loginForm.reset();
        this.router.navigateByUrl('/main');
      });
    } else {
      Object.keys(this.loginForm.controls).forEach((key: string) => {
        const abstractControl = this.loginForm.controls[key];
        abstractControl.markAsTouched();
      });
    }
  }
}
