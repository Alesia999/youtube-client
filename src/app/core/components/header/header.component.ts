import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchText!: string;
  isFilterOn: boolean = false;
  @Output() isResultOn: EventEmitter<boolean> = new EventEmitter();

  constructor(private readonly auth: AuthService, private router: Router) {}

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

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
