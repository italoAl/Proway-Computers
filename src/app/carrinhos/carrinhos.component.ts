import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinhos',
  templateUrl: './carrinhos.component.html',
  styleUrls: ['./carrinhos.component.scss']
})
export class CarrinhosComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho [] = [];
  total = 0;


  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.Quantidade), 0);
  }
  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }
comprar() {
  alert("Parabens você completou a sua compra")
  this.carrinhoService.limparCarrinho();
  this.router.navigate(["produtos"]);
}
}
