import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
    host: { class: 'block p-4', style: 'width:300px; height:300px' },
    template: `                                                                         
     
         
      <router-outlet></router-outlet>                 
    `,
})
export class App { }  