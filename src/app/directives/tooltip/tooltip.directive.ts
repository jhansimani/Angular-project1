import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('tooltipLabel') tooltipLabel = '';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  tooltip!: HTMLElement;
  @HostListener('mouseenter') onMouseEnter() {
    this.tooltip = this.renderer.createElement('p');

    this.tooltip.innerHTML = this.tooltipLabel;
    this.renderer.addClass(this.tooltip, 'tootip');
    this.renderer.setStyle(this.tooltip, 'position', 'absolute');
    this.renderer.setStyle(this.tooltip, 'top', '100px');

    console.log(this.tooltip);
  }
}
