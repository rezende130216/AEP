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

@Entity
@Table(name = "tb_categoria")
public class Categoria implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long categoriaID;
	private String tipoDeCategoria;
	
	@JsonIgnore
	@OneToMany(mappedBy = "categoria")
	private List<Transacao> transacoes = new ArrayList<>();
	
	public Categoria() {
		super();
	}

	public Categoria(Long categoriaID, String tipoDeCategoria) {
		super();
		this.categoriaID = categoriaID;
		this.tipoDeCategoria = tipoDeCategoria;
	}


	public Long getCategoriaID() {
		return categoriaID;
	}


	public void setCategoriaID(Long categoriaID) {
		this.categoriaID = categoriaID;
	}


	public String getTipoDeCategoria() {
		return tipoDeCategoria;
	}


	public void setTipoDeCategoria(String tipoDeCategoria) {
		this.tipoDeCategoria = tipoDeCategoria;
	}

	public List<Transacao> getTransacoes() {
		return transacoes;
	}

	public void setTransacoes(List<Transacao> transacoes) {
		this.transacoes = transacoes;
	}
	
	
	
}
