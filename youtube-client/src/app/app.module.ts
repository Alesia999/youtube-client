import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { FilteringComponent } from './header/filtering/filtering.component';
import { SearchResultsComponent } from './search/components/search-results/search-results.component';
import { SearchItemComponent } from './search/components/search-item/search-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
