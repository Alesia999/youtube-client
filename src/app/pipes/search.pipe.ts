import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SearchResults } from '../models/search-results.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: SearchResults, filterString: string): any {
    if (value.length === 0 || !filterString) {
      return value;
    }
    const searchResults: SearchResults = [];
    for (let searchItem of value) {
      for (let tag of searchItem.tags) {
        if (tag.toLowerCase().includes(filterString.toLowerCase())) {
          if (!searchResults.includes(searchItem)) {
            searchResults.push(searchItem);
          }
        }
      }
    }
    return searchResults;
  }
}
