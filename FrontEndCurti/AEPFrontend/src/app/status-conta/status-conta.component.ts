import { Component, Input } from '@angular/core';
import { TransacaoService } from '../services/transacao.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ContaServiceService } from '../services/conta-service.service';


@Component({
  selector: 'app-status-conta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './status-conta.component.html',
  styleUrl: './status-conta.component.css'
})
export class StatusContaComponent {
  constructor(private transacaoService: TransacaoService, private router:Router, private route: ActivatedRoute, private contaService: ContaServiceService){

  }

  saldoTotal:any = 0;
  saidas:any = 0;
  entradas: any = 0;
  transacoes: any
  data: contaDataGet[] = []

  @Input() id?:any;


  async ngOnInit(){
    this.data = await this.contaService.getConta();
    this.transacoes = await this.transacaoService.getTransacoes();
    console.log(this.data)
    this.atualizarStatus(this.data);
  }


  atualizarStatus(data:any){
    //Gastos totais


    this.transacoes.forEach((t: { get: (arg0: string) => string; }) => {
      if(t.get('categoria') == "Entrada"){
        this.entradas += t.get('valor');
      }else{
        this.saidas += t.get('valor');
      }
    })

    this.saldoTotal = this.entradas - this.saidas;
    
  }
  
}


interface contaDataGet {
  id: string,
  get: any,
} 