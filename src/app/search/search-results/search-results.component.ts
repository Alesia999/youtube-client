import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResults } from '../search-results.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  searchResults$?: Observable<SearchResults>;
}
