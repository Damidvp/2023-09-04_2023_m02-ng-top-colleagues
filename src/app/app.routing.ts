import { LoginPage } from './pages/login/login.page';
import { ColleagueDetailsComponent } from './shared/components/colleague-details/colleague-details.component';
import { ColleagueComponent } from './shared/components/colleague/colleague.component';
import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';
import { NgModule } from '@angular/core';
import { WelcomePage } from './pages/welcome/welcome.page';

import { Routes, RouterModule } from '@angular/router';
import { CreateColleagueReactiveFormsComponent } from './shared/components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';

export const ROUTES: Routes = [
  { path:'welcome-page', component: WelcomePage },
  { path:'create-form-template', component: CreateColleagueFormsComponent },
  { path:'create-form-reactive', component: CreateColleagueReactiveFormsComponent },
  { path:'login', component: LoginPage },
  { path:'colleagues/:pseudo', component: ColleagueDetailsComponent},
  { path: '**', component: LoginPage }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
