import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaServiceService {

  readonly apiURL : string = "http://localhost:8080";

  constructor(private http : HttpClient) { 
  }

  private contas:any;

  getAllContas(){
      this.http.get(`${ this.apiURL }/contas`).subscribe(result => {
      this.contas = result
    });
    return this.contas;
  }

  postConta(newConta:any){
    this.http.post(`${ this.apiURL }/contas`, newConta).subscribe(result => {
      
    })
  }

}
