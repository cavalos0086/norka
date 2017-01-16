declare var require;
const ProgressBar = require('progressbar.js');

import { Directive, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[appCaCircularProgressBar]'
})
export class CaCircularProgressBarDirective implements AfterContentInit{

    elementId;
    progressBar;

    constructor(el: ElementRef) {
        this.elementId = el.nativeElement.id;
    }

    ngAfterContentInit() {
        this.progressBar = new ProgressBar.Circle('#' + this.elementId, this.returnCommonOptions());
        this.progressBar.animate(0.93);
    }


    /**
     * @function returnCommonOptions
     * @description Returns common options used by each animation
     * @returns [Object]
     *
     * @memberOf CaCircularProgressBarDirective
     */
    returnCommonOptions() {
        const commonOptions = {
            color: '#FFEA82',
            trailColor: '#f4f4f4',
            trailWidth: 1,
            duration: 1400,
            easing: 'bounce',
            strokeWidth: 0.5,
            from: { color: '#FFEA82', a: 0 },
            to: { color: '#ED6A5A', a: 1 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
            },
            text: {
                value: '0.93'
            }
        };

        return commonOptions;
    }

}
