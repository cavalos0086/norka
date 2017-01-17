declare var require;
const ProgressBar = require('progressbar.js');

import { Directive, ElementRef, AfterContentInit, Input } from '@angular/core';

@Directive({
    selector: '[appCaCircularProgressBar]'
})
export class CaCircularProgressBarDirective implements AfterContentInit{

    elementId;
    @Input() animationValue: number;
    @Input() textValue: number;

    constructor(private el: ElementRef) {
        this.elementId = el.nativeElement.id;
    }

    // we use ngAfterContentInit to ensure that template has already been compiled at this point
    ngAfterContentInit() {
        const progressBar = new ProgressBar.Circle('#' + this.elementId, this.createCommonOptions(this.textValue));
        progressBar.animate(this.animationValue);
    }


    /**
     * @function createCommonOptions
     * @description creates common options Object used by each animation
     * @param [textValue] string: Text which is going to be displayed in the middle of circular progressBar
     * @returns [Object]
     *
     * @memberOf CaCircularProgressBarDirective
     */
    createCommonOptions(textValue) {
        const commonOptions = {
            color: '#4ECDC4',
            trailColor: '#f4f4f4',
            trailWidth: 3.5,
            duration: 1400,
            easing: 'bounce',
            strokeWidth: 3.5,
            from: { color: '#FFEA82', a: 0 },
            to: { color: '#4ECDC4', a: 1 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
            },
            text: {
                value: textValue
            }
        };

        return commonOptions;
    }

}
