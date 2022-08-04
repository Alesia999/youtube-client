import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { FormsModule } from '@angular/forms';
import { FilteringComponent } from './components/filtering/filtering.component';



@NgModule({
  declarations: [HeaderComponent,FilteringComponent,],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
