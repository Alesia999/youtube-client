import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { SearchResults } from 'src/app/youtube/models/search-results.model';

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
    this.youtubeService.sharedSortedByViews.subscribe((orderByViews) => {
      if (orderByViews) {
        this.searchResults$ = this.youtubeService.sortByViews(orderByViews);
      }
    });
    this.youtubeService.sharedSortedByDate.subscribe((orderByDate) => {
      if (orderByDate) {
        this.searchResults$ = this.youtubeService.sortByDate(orderByDate);
      }
    });
  }
}
