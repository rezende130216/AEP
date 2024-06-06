package com.AEP2024.AEP2024.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AEP2024.AEP2024.DTO.ContaDTO;
import com.AEP2024.AEP2024.entities.Conta;
import com.AEP2024.AEP2024.repositories.ContaRepository;

@RestController //Informando ao spring que essa classe é um Controller
@RequestMapping(value = "contas") //Informando ao spring que o endpoint é o /foods
public class ContaController {
	@Autowired // Injeção de dependencia
	private ContaRepository repository;
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping //Indicando que toda vez que o endpoint foods for alcançado será executado esse método
	public List<ContaDTO> getAll() {
		List<ContaDTO> result = repository.findAll().stream().map(ContaDTO::new).toList();
		return result;
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping //Indicando que será feito um método POST ou seja, adicionado algo.
	//RequestBody significa que será passado como parametro aquilo que estiver no body.
	public void insert(@RequestBody ContaDTO data) {
		Conta contaData = new Conta(data);
		repository.save(contaData);
	}
}
