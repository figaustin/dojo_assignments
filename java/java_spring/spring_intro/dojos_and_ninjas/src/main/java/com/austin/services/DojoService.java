package com.austin.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.austin.models.Dojo;
import com.austin.models.Ninja;
import com.austin.repositories.DojoRepo;

@Service
public class DojoService {

	
	@Autowired
	private DojoRepo dojoRepo;
	
	public void create(Dojo dojo) {
		dojoRepo.save(dojo);
	}
	
	public Dojo findById(Long id) {
		return dojoRepo.findById(id).orElse(null);
	}
	
	public ArrayList<Dojo> findAll() {
		return dojoRepo.findAll();
	}
	
	public void update(Dojo dojo) {
		dojoRepo.save(dojo);
	}
	
	public void deleteById(Long id) {
		dojoRepo.deleteById(id);
	}
	
}
