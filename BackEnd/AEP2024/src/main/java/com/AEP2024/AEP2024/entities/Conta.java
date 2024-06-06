package com.AEP2024.AEP2024.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.AEP2024.AEP2024.DTO.ContaDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity(name = "tb_conta")
@Table(name = "tb_conta")
public class Conta implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long contaID;
	private String nome;
	private String tipoDeConta;
	
	@JsonIgnore
	@OneToMany(mappedBy = "conta")
	private List<Transacao> transacoes = new ArrayList<>();

	
	public Conta() {
		super();
	}

	public Conta(Long contaID, String tipoDeConta, String nome) {
		super();
		this.contaID = contaID;
		this.tipoDeConta = tipoDeConta;
		this.nome = nome;
	}
	
	public Conta(ContaDTO conta) {
		this.contaID = conta.contaID();
		this.tipoDeConta = conta.tipoDeConta();
		this.transacoes = conta.transacoes();
		this.nome = conta.nome();
	}

	public Long getContaID() {
		return contaID;
	}

	public void setContaID(Long contaID) {
		this.contaID = contaID;
	}

	public String getTipoDeConta() {
		return tipoDeConta;
	}

	public void setTipoDeConta(String tipoDeConta) {
		this.tipoDeConta = tipoDeConta;
	}

	public List<Transacao> getTransacoes() {
		return transacoes;
	}

	public void setTransacoes(List<Transacao> transacoes) {
		this.transacoes = transacoes;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	
}
