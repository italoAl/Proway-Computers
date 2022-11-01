import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formContato = this.fb.group({
    nome: ["",[
      Validators.required,
      Validators.minLength(5)
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["",[
      Validators.email,
      Validators.required
    ]],
    mensagem: ["",[
      Validators.required,
      Validators.minLength(20)
    ]]

  });
  constructor(
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {
  }
  enviarFormulario() {
    alert("entraremos em contato");
    this.formContato.reset();
  }

}
