import { Component, Input } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { StatusContaComponent } from '../status-conta/status-conta.component';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { TransacaoService } from '../services/transacao.service';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-conta-detalhes',
  standalone: true,
  imports: [NavMenuComponent, StatusContaComponent, RouterLink, TableModule],
  templateUrl: './conta-detalhes.component.html',
  styleUrl: './conta-detalhes.component.css'
})
export class ContaDetalhesComponent {

  constructor(private contaService:ContaServiceService, private router:Router, private route: ActivatedRoute, private transacaoService: TransacaoService){

  }

  conta: contaDataGet[] = []
  transacoes: any;
  selectedTransacao: any;
  gastosTotais:any = 0;
  saidas:any = 0;
  entradas: any = 0;


  @Input() id?:any;

  async ngOnInit(){
    this.conta = await this.contaService.getContaById(this.id);
    this.transacoes = await this.transacaoService.getTransacoesDaConta(this.id);
    console.log(this.conta)
    console.log(this.transacoes)
    await this.atualizarStatus(this.transacoes)
  }
  
  goToCadastroTransacao(){
    console.log(this.conta[0].id)
    this.router.navigate([`/transacao_cadastro/${this.conta[0].id}`], { relativeTo: this.route });
  }

  onRowSelect(e: any) {
    console.log(e);
  }

  onRowUnselect(e: any) {
    console.log(e);
  }

  atualizarStatus(transacoes:any){
    //Gastos totais

    transacoes.forEach((e: { get: (arg0: string) => any; }) => {
      if(e.get("categoria") == "Entrada"){
        this.gastosTotais += e.get("valor");
        this.entradas += e.get("valor")
      }else{
        this.gastosTotais -= e.get("valor")
        this.saidas += e.get("valor")
      }
    });

    console.log(this.gastosTotais);
  }

  async deleteTransacao(e:any){
    await this.transacaoService.deleteTransacao(e);
    alert("Transação deletada com sucesso!");
    this.router.navigate([`/conta_detalhes/${this.conta[0].id}`], { relativeTo: this.route })

  }


}


interface contaDataGet {
  id: string,
  get: any,
} 
