import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    RouterModule
  ]
})
export class ProdutosModule { }
