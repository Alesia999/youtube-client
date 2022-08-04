import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { SearchResults } from 'src/app/youtube/models/search-results.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private filterString = new BehaviorSubject('');
  private sortedByViews = new BehaviorSubject('');
  private sortedByDate = new BehaviorSubject('');
  sharedFilterString = this.filterString.asObservable();
  sharedSortedByViews = this.sortedByViews.asObservable();
  sharedSortedByDate = this.sortedByDate.asObservable();
  responseUrl = 'assets/response/response.json';

  constructor(private http: HttpClient) {}

  getSearchResults(): Observable<SearchResults> {
    return this.http.get<SearchResponse>(this.responseUrl).pipe(
      map((searchResponse: SearchResponse) => {
        return searchResponse.items.map((item) => ({
          id: item.id,
          date: item.snippet.publishedAt,
          title: item.snippet.title,
          description: item.snippet.description,
          imageUrl: item.snippet.thumbnails.default.url,
          channelTitle: item.snippet.channelTitle,
          tags: item.snippet.tags,
          categoryId: item.snippet.categoryId,
          statistics: {
            viewCount: item.statistics.viewCount,
            likeCount: item.statistics.likeCount,
            dislikeCount: item.statistics.dislikeCount,
            favoriteCount: item.statistics.favoriteCount,
            commentCount: item.statistics.commentCount,
          },
        }));
      })
    );
  }

  updateFilterString(filterString: string) {
    this.filterString.next(filterString);
  }

  updateSortedByViews(order: string) {
    this.sortedByViews.next(order);
  }

  updateSortedByDate(order: string) {
    this.sortedByDate.next(order);
  }

  sortByViews(order: string) {
    return this.getSearchResults().pipe(
      map((searchResults) =>
        searchResults.sort((a, b) => {
          return order === 'desc'
            ? Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
            : Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
        })
      )
    );
  }

  sortByDate(order: string) {
    return this.getSearchResults().pipe(
      map((searchResults) =>
        searchResults.sort((a, b) => {
          return order === 'desc'
            ? new Date(a.date).getTime() - new Date(b.date).getTime()
            : new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      )
    );
  }
}
