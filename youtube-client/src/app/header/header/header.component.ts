import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText!: string;
  sortingText!: string;
  isFilterOn: boolean = false;
  @Output() isResultOn: EventEmitter<boolean> = new EventEmitter();
  constructor(private readonly youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.sharedFilterString.subscribe((sortingText) => {
      this.sortingText = sortingText;
    });
  }
  search(searchText: string) {
    if (searchText) {
      console.log(searchText);
      this.isResultOn.emit(true);
    } else {
      this.isResultOn.emit(false);
    }
  }
  sortBySortingText(sortingText: string) {
    this.youtubeService.updateFilterString(sortingText);
  }
  toggleFilter() {
    this.isFilterOn = !this.isFilterOn;
  }
}
