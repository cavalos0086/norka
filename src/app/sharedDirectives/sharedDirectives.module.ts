import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaGreenLineDividerDirective } from './ca-greenLineDivider.directive';
import { CaCircularProgressBarDirective } from './ca-circular-progress-bar.directive';
import { CaHighlighterDirective } from './ca-highlighter.directive';

@NgModule({
    imports: [],
    declarations: [
        CaGreenLineDividerDirective,
        CaCircularProgressBarDirective,
        CaHighlighterDirective
    ],
    exports: [
        CaGreenLineDividerDirective,
        CaCircularProgressBarDirective,
        CaHighlighterDirective
    ]
})

export class SharedDirectivesModule {}
