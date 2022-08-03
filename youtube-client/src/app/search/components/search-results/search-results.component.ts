import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { YoutubeService } from 'src/app/services/youtube.service';
import { SearchResults } from '../../models/search-results.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchResults$?: Observable<SearchResults>;
  filterString!: string;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.searchResults$ = this.youtubeService.getSearchResults();
    this.youtubeService.sharedFilterString.subscribe(
      (filterString) => (this.filterString = filterString)
    );
  }
}
