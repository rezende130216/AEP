package com.AEP2024.AEP2024.entities;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity(name = "tb_transacao")
@Table(name = "tb_transacao")
public class Transacao implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long transacaoID;
	
	@ManyToOne
	@JoinColumn(name = "contaID")
	private Conta conta;
	
	@ManyToOne
	@JoinColumn(name = "usuarioID")
	private Usuario usuario;
	
	@ManyToOne
	@JoinColumn(name = "categoriaID")
	private Categoria categoria;
	
	private Date dataOrigem;
	private Date dataVencimento;
	private double valor;
	private String descricao;
	private String origem;
	private String destino;
	
	public Transacao() {
		super();
	}

	public Transacao(Long transacaoID, Conta conta, Categoria categoria, Date dataOrigem, Date dataVencimento,
			double valor, String descricao, String origem, String destino, Usuario usuario) {
		super();
		this.transacaoID = transacaoID;
		this.conta = conta;
		this.categoria = categoria;
		this.dataOrigem = dataOrigem;
		this.dataVencimento = dataVencimento;
		this.valor = valor;
		this.descricao = descricao;
		this.origem = origem;
		this.destino = destino;
		this.usuario = usuario;
	}

	public Long getTransacaoID() {
		return transacaoID;
	}

	public void setTransacaoID(Long transacaoID) {
		this.transacaoID = transacaoID;
	}

	public Conta getConta() {
		return conta;
	}

	public void setConta(Conta conta) {
		this.conta = conta;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public Date getDataOrigem() {
		return dataOrigem;
	}

	public void setDataOrigem(Date dataOrigem) {
		this.dataOrigem = dataOrigem;
	}

	public Date getDataVencimento() {
		return dataVencimento;
	}

	public void setDataVencimento(Date dataVencimento) {
		this.dataVencimento = dataVencimento;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getOrigem() {
		return origem;
	}

	public void setOrigem(String origem) {
		this.origem = origem;
	}

	public String getDestino() {
		return destino;
	}

	public void setDestino(String destino) {
		this.destino = destino;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	
	
}
