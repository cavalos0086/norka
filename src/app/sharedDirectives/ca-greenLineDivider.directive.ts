import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[appCaGreenLineDivider]'
})

export class CaGreenLineDividerDirective implements AfterContentInit{

    @Input() marginTop: string;
    @Input() marginBottom: string;
    constructor(private el: ElementRef) {
        el.nativeElement.style.background = '#4ECDC4';
        el.nativeElement.style.height = '10px';
        el.nativeElement.style.opacity = '0.35';
    }

    // we use ngAfterContentInit to ensure that template has already been compiled at this point
    ngAfterContentInit() {
        this.el.nativeElement.style.marginTop = this.marginTop;
        this.el.nativeElement.style.marginBottom = this.marginBottom;
    }
}
