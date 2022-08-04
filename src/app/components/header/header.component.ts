import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchText!: string;
  isFilterOn: boolean = false;
  @Output() isResultOn: EventEmitter<boolean> = new EventEmitter();

  search(searchText: string) {
    if (searchText) {
      this.isResultOn.emit(true);
    } else {
      this.isResultOn.emit(false);
    }
  }

  toggleFilter() {
    this.isFilterOn = !this.isFilterOn;
  }
}
