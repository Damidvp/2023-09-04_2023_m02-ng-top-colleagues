import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';
import { NgModule } from '@angular/core';
import { WelcomePage } from './pages/welcome/welcome.page';

import { Routes, RouterModule } from '@angular/router';
import { CreateColleagueReactiveFormsComponent } from './shared/components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';

export const ROUTES: Routes = [
  { path:'welcome-page', component: WelcomePage },
  { path:'create-form-template', component: CreateColleagueFormsComponent },
  { path:'create-form-reactive', component: CreateColleagueReactiveFormsComponent },
  { path: '**', component: WelcomePage }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
