import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinhos',
  templateUrl: './carrinhos.component.html',
  styleUrls: ['./carrinhos.component.scss']
})
export class CarrinhosComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho [] = [];


  constructor(
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }


}
