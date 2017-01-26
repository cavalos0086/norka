import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaGreenLineDividerDirective } from './ca-greenLineDivider.directive';
import { CaCircularProgressBarDirective } from './ca-circular-progress-bar.directive';
import { CaHighlighterDirective } from './ca-highlighter.directive';
import { CaLineOnTopDirective } from './ca-line-on-top.directive';

@NgModule({
    imports: [],
    declarations: [
        CaGreenLineDividerDirective,
        CaCircularProgressBarDirective,
        CaHighlighterDirective,
        CaLineOnTopDirective
    ],
    exports: [
        CaGreenLineDividerDirective,
        CaCircularProgressBarDirective,
        CaHighlighterDirective,
        CaLineOnTopDirective
    ]
})

export class SharedDirectivesModule {}
