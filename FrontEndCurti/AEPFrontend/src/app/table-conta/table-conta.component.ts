import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ContaServiceService } from '../services/conta-service.service';

@Component({
  selector: 'app-table-conta',
  standalone: true,
  imports: [TableModule],
  templateUrl: './table-conta.component.html',
  styleUrl: './table-conta.component.css',
  providers: [ContaServiceService]
})
export class TableContaComponent {

  constructor(private contaService: ContaServiceService){

  }

  contas:any = []
  selectedConta:any;
  metaKey:any;
  

  
  async ngOnInit(){
    this.contas = this.contaService.getAllContas();
    console.log(this.contas)
  }

  onRowSelect(e:any){
    console.log("e")
  }

  onRowUnselect(e:any){
    console.log(e)
  }
}
