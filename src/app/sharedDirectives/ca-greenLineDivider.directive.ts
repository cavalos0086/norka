import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appCaGreenLineDivider]'
})

export class CaGreenLineDividerDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.background = '#4ECDC4';
        el.nativeElement.style.height = '10px';
    }
}
