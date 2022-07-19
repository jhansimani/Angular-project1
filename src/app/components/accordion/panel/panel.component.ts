import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() heading = 'I am heading';
  @Input() opened = false;
  @Output() panelStatus = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.opened = !this.opened;
    this.panelStatus.emit();
  }
}
