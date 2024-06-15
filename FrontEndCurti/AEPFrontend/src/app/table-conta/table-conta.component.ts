import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ContaServiceService } from '../services/conta-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransacaoService } from '../services/transacao.service';

@Component({
  selector: 'app-table-conta',
  standalone: true,
  imports: [TableModule],
  templateUrl: './table-conta.component.html',
  styleUrl: './table-conta.component.css',
  providers: [ContaServiceService]
})
export class TableContaComponent {

  constructor(private contaService: ContaServiceService, private router: Router, private route: ActivatedRoute) {

  }

  contas: any = []
  selectedConta: any;
  metaKey: any;
  data: contaDataGet[] = [];
  transacoes: any

  async ngOnInit() {
    this.data = await this.contaService.getConta();
  }

  onRowSelect(e: any) {
    this.router.navigate([`/conta_detalhes/${e.data.id}`], { relativeTo: this.route });
  }

  onRowUnselect(e: any) {
    console.log(e)
  }

}

interface contaDataGet {
  id: string,
  get: any,
} 
