import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaGreenLineDividerDirective } from './ca-greenLineDivider.directive';
import { CaCircularProgressBarDirective } from './ca-circular-progress-bar.directive';

@NgModule({
    imports: [],
    declarations: [
        CaGreenLineDividerDirective,
        CaCircularProgressBarDirective
    ],
    exports: [
        CaGreenLineDividerDirective,
        CaCircularProgressBarDirective
    ]
})

export class SharedDirectivesModule {}
