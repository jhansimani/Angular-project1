import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  @Input() text = '';
  @Input() background = '#fff';
  @Input() textColor = '';
  closed = false;
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.closed = !this.closed;
  }
}
