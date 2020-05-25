import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
       path: '', redirectTo: 'courses', pathMatch: 'full'
       }

      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
