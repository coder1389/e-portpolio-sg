import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sgInViewport]',
})
export class InViewportDirective {
  private isAlreadyInViewPort: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('document:scroll', ['$event'])
  isInViewPort() {
    const nativeElement = this.el.nativeElement as HTMLElement;
    const rect = nativeElement.getBoundingClientRect();

    if (
      !this.isAlreadyInViewPort &&
      rect.top >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      this.isAlreadyInViewPort = true;

      nativeElement.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 500,
        }
      );

      nativeElement.style.opacity = '1';
    }
  }
}
