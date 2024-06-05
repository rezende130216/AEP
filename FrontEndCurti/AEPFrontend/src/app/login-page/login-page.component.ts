import { Component } from '@angular/core';
import {MatGridListModule, MatGridList, MatGridTile} from'@angular/material/grid-list';
import {MatFormFieldModule, MatFormField} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatGridListModule, MatGridList, MatGridTile, MatFormFieldModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
