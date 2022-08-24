import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateValidator } from './date.validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  adminForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern('^(https?://)?((www.)?youtube.com|youtu.be)/.+$'),
    ]),
    date: new FormControl('', [Validators.required, DateValidator.ptDate]),
  });
  constructor(private router: Router) {}

  submit() {
    if (this.adminForm.valid) {
      this.adminForm.reset();
      this.router.navigateByUrl('/main');
    } else {
      Object.keys(this.adminForm.controls).forEach((key: string) => {
        const abstractControl = this.adminForm.controls[key];
        abstractControl.markAsTouched();
      });
    }
  }
}
