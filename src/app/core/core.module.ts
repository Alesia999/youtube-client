import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { FilteringComponent } from './components/filtering/filtering.component';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [HeaderComponent,FilteringComponent,],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent],
  providers: [AuthGuard]
})
export class CoreModule { }
