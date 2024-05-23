package com.AEP2024.AEP2024.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity(name = "tb_usuario")
@Table(name = "tb_usuario")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long usuarioID;
	
	private String nome;
	private String email;
	private String cpf;
	
	@JsonIgnore
	@OneToMany(mappedBy = "usuario")
	private List<Transacao> transacoes = new ArrayList<>();
	
	public Usuario(Long usuarioID, String nome, String email, String cpf) {
		super();
		this.usuarioID = usuarioID;
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
	}

	public Usuario() {
		super();
	}

	public Long getUsuarioID() {
		return usuarioID;
	}

	public void setUsuarioID(Long usuarioID) {
		this.usuarioID = usuarioID;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public List<Transacao> getTransacoes() {
		return transacoes;
	}

	public void setTransacoes(List<Transacao> transacoes) {
		this.transacoes = transacoes;
	}
	
	
	
}
