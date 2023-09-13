import { LoginModule } from './pages/login/login.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CreateCollegueReactiveModule } from './pages/create-collegue-reactive/create-collegue-reactive.module';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
    CreateCollegueReactiveModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
