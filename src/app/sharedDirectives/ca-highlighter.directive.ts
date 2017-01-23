import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const defaultColor = 'rgba(78, 205, 196, 0.60)';
@Directive({
    selector: '[appCaHighlighter]'
})

export class CaHighlighterDirective {
    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}


