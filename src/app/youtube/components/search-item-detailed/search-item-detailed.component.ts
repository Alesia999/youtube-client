import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { SearchResults } from '../../models/search-results.model';
import { YoutubeService } from '../../services/youtube.service';

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
    
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchItemId = params['id'];
    });
    this.route.data.subscribe(
      (searchItem) => (this.searchItem = searchItem['searchItemDetailed'])
    );
  }
}
