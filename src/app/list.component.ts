import { Component, OnInit, ElementRef, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import { HttpService } from './get.service';

import {Router} from '@angular/router';


@Component({
    selector: 'list-app',
    templateUrl: './html/list.component.html',
    styleUrls: ['./css/list.css'],
    providers: [HttpService]
})


export class ListComponent implements OnInit {

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef, private router: Router) { }

  intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }



}
