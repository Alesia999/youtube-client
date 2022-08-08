import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [LoginComponent, NotFoundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
  exports: [LoginComponent, RouterModule],
  providers: [AuthService],
})
export class AuthModule {}
