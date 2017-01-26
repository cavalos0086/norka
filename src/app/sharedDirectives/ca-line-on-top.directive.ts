import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[appCaLineOnTop]'
})
export class CaLineOnTopDirective implements AfterContentInit{
    @Input() text: string;
    element;
    constructor(private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngAfterContentInit() {

        // tslint:disable-next-line max-line-length
        this.element.innerHTML = `<div class="container" style="margin-top:30px;"><div class="row"><div class="col-xs-2"><h3 style="border-top:3px solid black;text-align:right;">` + this.text + `</h3> </div> <div class="col-xs-10"></div></div>`;
    }

}
