import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() openStatus = new EventEmitter<boolean>();
  opened = true;
  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.opened = false;
    this.openStatus.emit(false);
  }
}
