import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.background') defaultColor = 'none';
  @Input() highLightColor = '';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event.target']) onMouseEnter() {
    this.defaultColor = this.highLightColor
      ? this.highLightColor
      : this.defaultColor;
    console.log('mouse enter', this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.defaultColor = 'none';
    console.log('mouse leave', this.defaultColor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', this.defaultColor);
  }
}
