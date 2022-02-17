import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from 'src/app/core/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToHome(): void {
    this.router.navigate([MENU.home]);
  }
}
