import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() searchItem!: SearchItem;

  dateDiffInDays(item: SearchItem) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const a = new Date(Date.now());
    const b = new Date(item.date);
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }
}
