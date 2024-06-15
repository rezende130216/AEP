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
import { TransacaoCategoria } from '../enums/transacao-categoria';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transacao-cadastro',
  standalone: true,
  imports: [NavMenuComponent, ReactiveFormsModule, InputTextModule, FloatLabelModule, ButtonModule, CalendarModule, DropdownModule, CommonModule],
  templateUrl: './transacao-cadastro.component.html',
  styleUrl: './transacao-cadastro.component.css'
})
export class TransacaoCadastroComponent {


  constructor(private contaService: ContaServiceService, private transacaoService: TransacaoService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  conta: contaDataGet[] = []
  @Input() id?: any;

  categoriasTransacaoEnum = [
    { name: 'Entrada', value: TransacaoCategoria.ENTRADA },
    { name: 'Saída', value: TransacaoCategoria.SAIDA }
  ];

  async ngOnInit() {

    this.formCadastroTransacao = this.formBuilder.group({
      valorTransacao: [0, Validators.required], // Valor obrigatório
      categoriaTransacao: ['', Validators.required], // Categoria obrigatória
      descricaoTransacao: ['', Validators.required], // Descrição obrigatória
      dataTransacao: ['', Validators.required] // Data obrigatória
    });

    this.conta = await this.contaService.getContaById(this.id);
    console.log(this.conta)
  }

  formCadastroTransacao = new FormGroup({
    valorTransacao: new FormControl(0),
    categoriaTransacao: new FormControl(''),
    descricaoTransacao: new FormControl(''),
    dataTransacao: new FormControl(''),
  })

  async cadastroTransacao() {

    let updatedConta;
    if (this.formCadastroTransacao.invalid) {
      alert("Existem campos obrigatórios vazios!")
    } else {

      console.log(this.formCadastroTransacao);
      let newTransacao = {
        transacaoID: null,
        dataOrigem: this.formCadastroTransacao.controls.dataTransacao.value,
        valor: this.formCadastroTransacao.controls.valorTransacao.value,
        descricao: this.formCadastroTransacao.controls.descricaoTransacao.value,
        categoria: this.formCadastroTransacao.value.categoriaTransacao
      }

      await this.transacaoService.postTransacao(newTransacao, this.id);
      this.router.navigate([`/conta_detalhes/${this.id}`], { relativeTo: this.route });

    }

  }

}

interface contaDataGet {
  id: string,
  get: any,
} 