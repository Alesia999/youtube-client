import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SearchResponse } from '../search/models/search-response.model';
import { SearchResults } from '../search/models/search-results.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
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
}
