import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  showResults(searchText: string) {
    if (searchText && searchText.length >= 3) {
      this.router.navigateByUrl('/main');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
