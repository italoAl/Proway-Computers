import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CarrinhosModule } from './carrinhos/carrinhos.module';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent,
    BarraPesquisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CarrinhosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
