import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent,],
  imports: [
    CommonModule,
    YoutubeModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
