import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [MenubarModule, RouterLink, NgIf],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {

  items:any = [{route: "/home", label: "Home", icon: "pi pi-home", url: null}]
}
