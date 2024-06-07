import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';
import { CalendarModule } from 'primeng/calendar';
import { TransacaoService } from '../services/transacao.service';

@Component({
  selector: 'app-transacao-cadastro',
  standalone: true,
  imports: [NavMenuComponent, ReactiveFormsModule, InputTextModule, FloatLabelModule, ButtonModule, CalendarModule],
  templateUrl: './transacao-cadastro.component.html',
  styleUrl: './transacao-cadastro.component.css'
})
export class TransacaoCadastroComponent {


  constructor(private contaService:ContaServiceService, private transacaoService:TransacaoService){

  }

  conta: contaDataGet[] = []
  @Input() id?:any;

  async ngOnInit(){
    this.conta = await this.contaService.getContaById(this.id);
    console.log(this.conta)
  }

  formCadastroTransacao = new FormGroup({
    valorTransacao: new FormControl(''),
    categoriaTransacao: new FormControl(''),
    descricaoTransacao: new FormControl(''),
    dataTransacao: new FormControl(''),
  })

  cadastroTransacao(){
    let newTransacao = {
      transacaoID: null,
      dataOrigem: this.formCadastroTransacao.controls.dataTransacao.value,
      valor: this.formCadastroTransacao.controls.valorTransacao.value,
      descricao: this.formCadastroTransacao.controls.descricaoTransacao.value,
    }

    console.log(this.conta[0])
    this.transacaoService.postTransacao(newTransacao, this.conta[0]);
  }

}

interface contaDataGet {
  id: string,
  get: any,
} 