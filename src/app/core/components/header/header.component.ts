import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchText!: string;
  isFilterOn: boolean = false;
  @Output() isResultOn: EventEmitter<string> = new EventEmitter();

  constructor(
    private readonly auth: AuthService,
    private router: Router,
    private youtubeService: YoutubeService
  ) {}

  search(searchText: string) {
    this.isResultOn.emit(searchText);
    if (searchText.length >= 3) {
      this.youtubeService.updateQueryText(searchText);
    }
  }

  toggleFilter() {
    this.isFilterOn = !this.isFilterOn;
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
