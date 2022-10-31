import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhosRoutingModule } from './carrinhos-routing.module';
import { CarrinhosComponent } from './carrinhos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarrinhosComponent
  ],
  imports: [
    CommonModule,
    CarrinhosRoutingModule,
    FormsModule
  ]
})
export class CarrinhosModule { }
