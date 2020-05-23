import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CourseListComponent } from './courses/course.list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { CourseInfoComponent } from './courses/course.info.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent

       },
       {
        path: 'courses/info/:id', component: CourseInfoComponent

       },
      {
       path: '', redirectTo: 'courses', pathMatch: 'full'
       },
      {
       path: '**', component: Error404Component
       },
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
