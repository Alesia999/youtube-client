import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  BehaviorSubject,
  debounceTime,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { SearchResults } from 'src/app/youtube/models/search-results.model';
import { SearchItem } from '../models/search-item.model';
import { environment } from 'src/environments/environment';
import { VideoResponse } from '../models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private filterString = new BehaviorSubject('');
  private queryText = new BehaviorSubject('');
  private sortedByViews = new BehaviorSubject('');
  private sortedByDate = new BehaviorSubject('');
  sharedFilterString = this.filterString.asObservable();
  sharedSortedByViews = this.sortedByViews.asObservable();
  sharedSortedByDate = this.sortedByDate.asObservable();
  sharedQueryText = this.queryText.asObservable();

  constructor(private http: HttpClient) {}

  getSearchResults(searchedText: string): Observable<SearchResults> {
    const params = new HttpParams()
      .set('key', environment.apiKey)
      .set('part', 'snippet')
      .set('maxResults', '8')
      .set('q', searchedText);

    return this.http
      .get<SearchResponse>(environment.apiUrl + 'search', { params })
      .pipe(
        mergeMap((searchResponse: SearchResponse) => {
          let items = searchResponse.items;
          let idItems = items.map((item) => item.id.videoId).join(',');
          return this.getVideoResults(idItems).pipe(
            map((videoResponse: VideoResponse) => {
              return videoResponse.items.map((item: any) => ({
                id: item.id,
                date: item.snippet.publishedAt,
                title: item.snippet.title,
                description: item.snippet.description,
                imageUrl: item.snippet.thumbnails.default.url,
                imageUrlDetailed: item.snippet.thumbnails.high.url,
                channelTitle: item.snippet.channelTitle,
                statistics: {
                  viewCount: item.statistics.viewCount,
                  likeCount: item.statistics.likeCount,
                  dislikeCount: item.statistics.dislikeCount,
                  favoriteCount: item.statistics.favoriteCount,
                  commentCount: item.statistics.commentCount,
                },
                tags: item.snippet.tags,
              }));
            })
          );
        })
      );
  }

  getVideoResults(id: string): Observable<VideoResponse> {
    const params = new HttpParams()
      .set('key', environment.apiKey)
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http.get<VideoResponse>(environment.apiUrl + 'videos', {
      params,
    });
  }

  getSearchResultsById(id: string) {
    return this.getSearchResults(this.queryText.value).pipe(
      map((searchResults: SearchResults) => {
        return searchResults.find((item: SearchItem) => item.id === id)!;
      })
    );
  }

  updateQueryText(queryText: string) {
    this.queryText.next(queryText);
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
    return this.getSearchResults(this.queryText.value).pipe(
      map((searchResults) =>
        searchResults.sort((a, b) => {
          return order === 'desc'
            ? Number(a.statistics?.viewCount) - Number(b.statistics?.viewCount)
            : Number(b.statistics?.viewCount) - Number(a.statistics?.viewCount);
        })
      )
    );
  }

  sortByDate(order: string) {
    return this.getSearchResults(this.queryText.value).pipe(
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
