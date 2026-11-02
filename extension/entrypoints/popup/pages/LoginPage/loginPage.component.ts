import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'login-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'block p-4' },
    templateUrl: './loginPage.component.html',
    styleUrls: ['./loginPage.component.scss']
})
export class LoginPage {
    constructor(){
        console.log("constructo Login")
    }
 }  