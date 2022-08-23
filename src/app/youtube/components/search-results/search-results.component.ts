import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { SearchResults } from 'src/app/youtube/models/search-results.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();
  searchResults$?: Observable<SearchResults>;
  filterString!: string;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.searchResults$ = this.youtubeService.sharedQueryText
      .pipe(
        debounceTime(1000),
        switchMap((text) => this.youtubeService.getSearchResults(text))
      )
      .pipe(takeUntil(this.destroy$));
    this.youtubeService.sharedFilterString
      .pipe(takeUntil(this.destroy$))
      .subscribe((filterString) => (this.filterString = filterString));
    this.youtubeService.sharedSortedByViews
      .pipe(takeUntil(this.destroy$))
      .subscribe((orderByViews) => {
        if (orderByViews) {
          this.searchResults$ = this.youtubeService.sortByViews(orderByViews);
        }
      });
    this.youtubeService.sharedSortedByDate
      .pipe(takeUntil(this.destroy$))
      .subscribe((orderByDate) => {
        if (orderByDate) {
          this.searchResults$ = this.youtubeService.sortByDate(orderByDate);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
