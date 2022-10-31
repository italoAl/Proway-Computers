import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhosComponent } from './carrinhos.component';

const routes: Routes = [{ path: '', component: CarrinhosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhosRoutingModule { }
