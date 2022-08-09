import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
@Injectable({ providedIn: 'root' })
export class SearchItemDetailedResolver implements Resolve<SearchItem> {
  constructor(private readonly youtubeService: YoutubeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): SearchItem | Observable<SearchItem> | Promise<SearchItem> {
    return this.youtubeService.getSearchResultsById(route.params['id']);
  }
}
