package com.biblioteca.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.biblioteca.model.AreaConhecimento;

@Repository
public interface AreaConhecimentoRepository extends JpaRepository<AreaConhecimento,Integer>{
	
}