import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string | undefined;

  constructor(private el: ElementRef) {
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('red');
  }
}
