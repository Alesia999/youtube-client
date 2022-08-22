import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search-item-detailed',
  templateUrl: './search-item-detailed.component.html',
  styleUrls: ['./search-item-detailed.component.scss'],
})
export class SearchItemDetailedComponent implements OnInit {
  searchItemId!: string;
  searchItem!: SearchItem;

  constructor(
    private readonly route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchItemId = params['id'];
    });
    this.route.data.subscribe(
      (searchItem) => (this.searchItem = searchItem['searchItemDetailed'])
    );
  }

  dateDiffInDays(item: SearchItem) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const a = new Date(Date.now());
    const b = new Date(item.date);
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }

  goBack() {
    this.location.back();
  }
}
