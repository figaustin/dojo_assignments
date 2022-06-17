package com.austin.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.austin.models.Dojo;
import com.austin.models.Ninja;
import com.austin.repositories.NinjaRepo;

@Service
public class NinjaService {

	
	@Autowired
	private NinjaRepo ninjaRepo;
	
	public void create(Ninja ninja) {
		ninjaRepo.save(ninja);
	}
	
	public Ninja findById(Long id) {
		return ninjaRepo.findById(id).orElse(null);
	}
	
	public ArrayList<Ninja> findAll() {
		return ninjaRepo.findAll();
	}
	
	public void update(Ninja ninja) {
		ninjaRepo.save(ninja);
	}
	
	public void deleteById(Long id) {
		ninjaRepo.deleteById(id);
	}
}
