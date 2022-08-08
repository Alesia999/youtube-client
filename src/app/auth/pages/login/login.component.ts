import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(['']),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    this.authService.login(username, password).subscribe(() => {
      this.loginForm.reset();
      this.router.navigateByUrl('/main');
    });
  }
}