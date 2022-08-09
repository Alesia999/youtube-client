import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent implements OnInit {
  sortingText!: string;
  order: string = 'desc';

  constructor(private readonly youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.sharedFilterString.subscribe((sortingText) => {
      this.sortingText = sortingText;
    });
  }

  sortBySortingText(sortingText: string) {
    this.youtubeService.updateFilterString(sortingText);
  }

  sortByViews() {
    if (this.order === 'desc') {
      this.order = 'asc';
    } else if (this.order === 'asc') {
      this.order = 'desc';
    }
    this.youtubeService.updateSortedByViews(this.order);
  }

  sortByDate() {
    if (this.order === 'desc') {
      this.order = 'asc';
    } else if (this.order === 'asc') {
      this.order = 'desc';
    }
    this.youtubeService.updateSortedByDate(this.order);
  }
}
