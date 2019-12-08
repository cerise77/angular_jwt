import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                    <nav [ngClass]="{header:true}">
                      <ul>
                        <li><a routerLink=""></a></li>
                        <li><a routerLink="list"></a></li>
                        <li><a routerLink="profil"></a></li>
                        <li><a routerLink="about"></a></li>
                      </ul>
                    </nav>
                    <router-outlet></router-outlet>
               `,
    styleUrls: ['./css/app.component.css']
})
export class AppComponent {}
