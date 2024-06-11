import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { HomeComponent } from './home/home.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ContaDetalhesComponent } from './conta-detalhes/conta-detalhes.component';
import { UrlSegment } from '@angular/router';
import { TransacaoCadastroComponent } from './transacao-cadastro/transacao-cadastro.component';


export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', component: TelaInicialComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro_conta', component: CadastroContaComponent },
    { path: 'conta_detalhes/:id', component: ContaDetalhesComponent},
    { path: 'transacao_cadastro/:id', component: TransacaoCadastroComponent}
    
];
