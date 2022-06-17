package com.austin.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.austin.models.Dojo;

public interface DojoRepo extends CrudRepository<Dojo, Long>{
	
	ArrayList<Dojo> findAll();
}
