import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/components/header/header.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { ColorDirective } from './directives/color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilteringComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchPipe,
    ColorDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [SearchResultsComponent, FilteringComponent],
})
export class YoutubeModule {}
