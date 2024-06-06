import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { ContaServiceService } from '../services/conta-service.service';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-conta',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, ButtonModule, NavMenuComponent, ReactiveFormsModule],
  templateUrl: './cadastro-conta.component.html',
  styleUrl: './cadastro-conta.component.css'
})
export class CadastroContaComponent {
  constructor(private contaService: ContaServiceService){

  }

  formCadastroConta = new FormGroup({
    tipoConta: new FormControl(''),
    nomeConta: new FormControl('')
  })
  

  cadastrarConta(){
    let newConta = {
      contaID: null,
      nome: this.formCadastroConta.controls.nomeConta.value,
      tipoDeConta: this.formCadastroConta.controls.tipoConta.value,
      transacoes: []
    }

    console.log(newConta)
    this.contaService.postConta(newConta);
  }

}
