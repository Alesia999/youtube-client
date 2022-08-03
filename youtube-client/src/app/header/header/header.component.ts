import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
  search(searchText: string) {
    if (searchText) {
      console.log(searchText);
      this.isResultOn.emit(true);
    }else{
      this.isResultOn.emit(false);
    }
  }
  sortBySortingText(sortingText: string) {
    if (sortingText) {
      console.log(sortingText);
    }
  }
  toggleFilter() {
    this.isFilterOn = !this.isFilterOn;
  }
}
