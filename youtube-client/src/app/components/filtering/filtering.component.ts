import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  sortingText!: string;

  constructor(private readonly youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.sharedFilterString.subscribe((sortingText) => {
      this.sortingText = sortingText;
    });
  }

  sortBySortingText(sortingText: string) {
    this.youtubeService.updateFilterString(sortingText);
  }

}
