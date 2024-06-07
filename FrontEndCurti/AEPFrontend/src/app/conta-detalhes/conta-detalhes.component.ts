import { Component, Input } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { StatusContaComponent } from '../status-conta/status-conta.component';


@Component({
  selector: 'app-conta-detalhes',
  standalone: true,
  imports: [NavMenuComponent, StatusContaComponent],
  templateUrl: './conta-detalhes.component.html',
  styleUrl: './conta-detalhes.component.css'
})
export class ContaDetalhesComponent {

  constructor(private contaService:ContaServiceService){

  }

  conta: contaDataGet[] = []


  @Input() id?:any;

  async ngOnInit(){
    this.conta = await this.contaService.getContaById(this.id);
    console.log(this.conta)
  }
  



}


interface contaDataGet {
  id: string,
  get: any,
} 