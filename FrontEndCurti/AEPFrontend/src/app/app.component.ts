import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AEPFrontend';

  constructor(){
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    
  }
  
}
const PARSE_APPLICATION_ID = "KHdaxmmqHXHN3P6rExLHvn2D4qgT8fhcVTy2TLAR";
const PARSE_JAVASCRIPT_KEY = "tmaaVhCliSn8dM1UOv56FDZJGcjnGJpFpm0fzN6e";
Parse.CoreManager.set('SERVER_URL', "https://parseapi.back4app.com/");



