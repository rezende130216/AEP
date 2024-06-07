import { Component, Input } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { StatusContaComponent } from '../status-conta/status-conta.component';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-conta-detalhes',
  standalone: true,
  imports: [NavMenuComponent, StatusContaComponent, RouterLink],
  templateUrl: './conta-detalhes.component.html',
  styleUrl: './conta-detalhes.component.css'
})
export class ContaDetalhesComponent {

  constructor(private contaService:ContaServiceService, private router:Router, private route: ActivatedRoute){

  }

  conta: contaDataGet[] = []


  @Input() id?:any;

  async ngOnInit(){
    this.conta = await this.contaService.getContaById(this.id);
    console.log(this.conta)
  }
  
  goToCadastroTransacao(){
    console.log(this.conta[0].id)
    this.router.navigate([`/transacao_cadastro/${this.conta[0].id}`], { relativeTo: this.route });
  }


}


interface contaDataGet {
  id: string,
  get: any,
} 