import { Component, ViewChild, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';
import {Router} from '@angular/router';


@Component({
    selector: 'login-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})
export class LoginComponent {

  form:FormGroup;

    constructor(private fb:FormBuilder,
                 private authService: AuthService,
                 private router: Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        console.log("User is logged in");
                        this.router.navigateByUrl(['/list']);
                    }
                );
        }
    }


}
