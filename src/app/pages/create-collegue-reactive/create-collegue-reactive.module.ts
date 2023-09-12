import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCollegueReactivePage } from './create-collegue-reactive.page';



@NgModule({
  declarations: [
    CreateCollegueReactivePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    CreateCollegueReactivePage
  ]
})
export class CreateCollegueReactiveModule { }
