import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'layout-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet,   RouterLink, RouterLinkActive],
    host: { class: 'block p-4' },
    templateUrl: './layoutPage.component.html',
    styleUrls: ['./layoutPage.component.scss']
})
export class LayoutPage { }  