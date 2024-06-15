import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { ContaServiceService } from '../services/conta-service.service';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-conta',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, ButtonModule, NavMenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-conta.component.html',
  styleUrl: './cadastro-conta.component.css'
})
export class CadastroContaComponent {
  constructor(private contaService: ContaServiceService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  formCadastroConta = new FormGroup({
    tipoConta: new FormControl(''),
    nomeConta: new FormControl(''),
  })

  ngOnInit() {
    this.formCadastroConta = this.formBuilder.group({
      tipoConta: ['', Validators.required],
      nomeConta: ['', Validators.required]
    });
  }


  async cadastrarConta() {

    if (this.formCadastroConta.invalid) {
      alert("Existem campos obrigatórios vazios!")
    } else {

      let newConta = {
        contaID: null,
        nome: this.formCadastroConta.controls.nomeConta.value,
        tipoDeConta: this.formCadastroConta.controls.tipoConta.value,
        transacoes: []
      }
  
      console.log(newConta)
      await this.contaService.postConta(newConta);
      this.router.navigate([`/home`], { relativeTo: this.route });

    }

    
  }

}
