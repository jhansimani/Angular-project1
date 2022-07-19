import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openNavbar = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  openNav() {
    this.openNavbar = !this.openNavbar;
  }

  onClose() {
    this.openNavbar = false;
  }
  goTo(route: string) {
    console.log(route);
    this.router.navigate([route]);
    this.openNavbar = false;
  }
}
