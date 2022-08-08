import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isResultVisible = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showResults(event: boolean) {
    this.isResultVisible = event;
    if(this.isResultVisible) {
      this.router.navigateByUrl('/main')
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
