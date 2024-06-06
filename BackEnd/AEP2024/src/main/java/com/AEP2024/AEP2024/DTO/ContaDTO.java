package com.AEP2024.AEP2024.DTO;

import java.util.List;

import com.AEP2024.AEP2024.entities.Conta;
import com.AEP2024.AEP2024.entities.Transacao;

public record ContaDTO(Long contaID, String tipoDeConta, List<Transacao> transacoes, String nome ) {
	public ContaDTO(Conta conta) {
		this(conta.getContaID(), conta.getTipoDeConta(), conta.getTransacoes(), conta.getNome());
		}
}
