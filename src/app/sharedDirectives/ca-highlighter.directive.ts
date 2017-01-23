import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const defaultColor = '#4ECDC4';
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


