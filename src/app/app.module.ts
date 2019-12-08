import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ListComponent } from './list.component';
import { NotFoundComponent }   from './not-found.component';

import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes =[
    { path: '', component: LoginComponent},
    { path: 'list', component: ListComponent},
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [AppComponent, LoginComponent, ListComponent, NotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
