import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() opened = true;
  @Input() heading = '';
  @Input() background = '';
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.opened = !this.opened;
  }
}
