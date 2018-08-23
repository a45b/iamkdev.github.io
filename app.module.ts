import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { BannerComponent } from './banner/banner.component';
import { BoldDirective } from './bold.directive';
import { NotifyService } from './notify.service';
import { HttpInterceptorService } from './http-interceptor.service';
import { MyError } from './my-error';
import { NgBlinkComponent } from './ng-blink/ng-blink.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ProfileComponent,
    ListComponent,
    BannerComponent,
    BoldDirective,
    NgBlinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient, 
    AuthGuardService, 
    NotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {provide: ErrorHandler, useClass: MyError}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
