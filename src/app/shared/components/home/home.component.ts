import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { of, debounceTime } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private youtubeService: YoutubeService) {}

  ngOnInit(): void {}

  showResults(searchText: string) {
    if (searchText && searchText.length >= 3) {
      this.router.navigateByUrl('/main');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
