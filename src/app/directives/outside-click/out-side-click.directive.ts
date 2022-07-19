import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { fromEvent, take } from 'rxjs';

@Directive({
  selector: '[appOutSideClick]',
})
export class OutSideClickDirective {
  @Output('appOutSideClick') clickOutside = new EventEmitter();

  captured = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    if (!this.captured) {
      return;
    }

    if (!this.elRef.nativeElement.contains(target)) {
      this.clickOutside.emit();
    }
  }

  ngOnInit() {
    fromEvent(document, 'click', { capture: true })
      .pipe(take(1))
      .subscribe(() => (this.captured = true));
  }
}
