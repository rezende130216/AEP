import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { HomeComponent } from './home/home.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', component: TelaInicialComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro_conta', component: CadastroContaComponent }
];
