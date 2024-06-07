import { Injectable } from '@angular/core';
import * as Parse from 'parse'
import { PasswordDirective } from 'primeng/password';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor() { }

  data: TransacaoDataGet[] = [];

  async getTransacoes() {
    try {
      const query = new Parse.Query("transacao");

      const transacoes = await query.find()

      this.data = transacoes;

      return transacoes;

    } catch (error) {
      return this.data;
    }
  }

  async getTransacoesById(id: any) {
    try {
      const query = new Parse.Query("transacao");

      let transacoes = await query.find()

      transacoes = transacoes.filter(e => e.id == id)

      this.data = transacoes;

      return transacoes;

    } catch (error) {
      return this.data;
    }
  }

  postTransacao(newTransacao: any, idConta: any) {
    try {
      const Transacao = new Parse.Object("transacao");
      const ContaAssociada = new Parse.Relation(idConta)
      
      Transacao.set("valor", newTransacao.valor);
      Transacao.set("descricao", newTransacao.descricao);
      Transacao.set("dataOrigem", newTransacao.dataOrigem);
      //Transacao.set("contaID", ContaAssociada)


      Transacao.save().then(() => {
        console.log("New Post added successfully");
      });
    } catch (error) {
      console.log(error);
    }
  }
}

interface TransacaoDataGet {
  id: string,
  get: any,
} 