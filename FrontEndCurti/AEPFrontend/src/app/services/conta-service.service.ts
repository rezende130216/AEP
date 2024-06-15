import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as  Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class ContaServiceService {

  constructor(private http: HttpClient) {
  }

  data: contaDataGet[] = [];

  async getConta(){
    try {
      const query = new Parse.Query("conta");

      const contas = await query.find()

      this.data = contas;

      return contas;

    } catch (error) {
      return this.data;
    }
  }

  async getContaById(id:any){
    try {
      const query = new Parse.Query("conta");

      let contas = await query.find()

      contas = contas.filter(e => e.id == id)

      this.data = contas;

      return contas;

    } catch (error) {
      return this.data;
    }
  }

  postConta(newConta: any) {
    try {
      const Conta = new Parse.Object("conta");

      Conta.set("nome", newConta.nome);
      Conta.set("tipoDeConta", newConta.tipoDeConta);
      Conta.set("valor", newConta.valorConta)

      Conta.save().then(() => {
        console.log("New Post added successfully");
      });
    } catch (error) {
      console.log(error);
    }
  }

}

interface contaData {
  nome: string,
  tipoDeConta: string
}

interface contaDataGet {
  id: string,
  get: any,
} 