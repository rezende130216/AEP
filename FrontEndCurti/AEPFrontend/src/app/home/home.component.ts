import { Component } from '@angular/core';
import { StatusContaComponent } from '../status-conta/status-conta.component';
import { TableContaComponent } from '../table-conta/table-conta.component';
import { RouterLink } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatusContaComponent, TableContaComponent, RouterLink, NavMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
