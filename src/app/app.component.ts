import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bootstarp-app';
  flag = false;
  toggleModal() {
    this.flag = !this.flag;
  }
}
