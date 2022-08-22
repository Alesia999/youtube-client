import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { ColorDirective } from './directives/color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { SearchItemDetailedComponent } from './components/search-item-detailed/search-item-detailed.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SearchPipe,
    ColorDirective,
    MainPageComponent,
    SearchItemDetailedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forChild([{ path: '', component: MainPageComponent }]),
  ],

  exports: [MainPageComponent],
})
export class YoutubeModule {}
