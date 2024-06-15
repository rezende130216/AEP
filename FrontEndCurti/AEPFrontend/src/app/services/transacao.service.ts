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
      console.log(transacoes)

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

      Transacao.set("valor", newTransacao.valor);
      Transacao.set("descricao", newTransacao.descricao);
      Transacao.set("dataOrigem", newTransacao.dataOrigem);
      Transacao.set("categoria", newTransacao.categoria.value);

      const Conta = Parse.Object.extend("conta");
      const contaPointer = Conta.createWithoutData(idConta);
      Transacao.set("conta", contaPointer);

      Transacao.save().then(() => {
        console.log("Nova transação adicionada com sucesso");
      }).catch((error) => {
        console.error("Erro ao salvar transação: ", error);
      });
    } catch (error) {
      console.error("Erro durante o processamento da transação: ", error);
    }
  }

  async getTransacoesDaConta(idConta: any) {
    let transacaoVincConta = []
    const Conta = Parse.Object.extend("conta");
    const query = new Parse.Query("transacao");


    const contaPointer = Conta.createWithoutData(idConta);

    query.equalTo("conta", contaPointer);

    this.data =  await query.find();

    return this.data;
  }

  async deleteTransacao(idTransacao: any){
    console.log(idTransacao)
    const query = new Parse.Query('transacao');
    const transacao = await query.get(idTransacao);
    console.log(transacao);

    await transacao.destroy();

    

  }


}

interface TransacaoDataGet {
  id: string,
  get: any,
} 