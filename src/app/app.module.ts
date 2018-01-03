import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
// import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
// import {SystemModule} from "./system/system.module";
import {AuthGuard} from "./shared/services/auth.guard";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
