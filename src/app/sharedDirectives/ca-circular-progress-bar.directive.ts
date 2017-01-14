declare var require;
let ProgressBar = require('progressbar.js');

import { Directive, ElementRef } from '@angular/core';


@Directive({
    selector: '[appCaCircularProgressBar]'
})
export class CaCircularProgressBarDirective {

    sketch;
    constructor(el: ElementRef) {

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
        setTimeout(function() {
            this.sketch = new ProgressBar.Circle('#sketch', commonOptions);
            this.sketch.animate(0.93);
        }, 1000);
    }

}
