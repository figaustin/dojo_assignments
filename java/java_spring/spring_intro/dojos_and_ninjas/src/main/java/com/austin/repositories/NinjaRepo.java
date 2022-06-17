package com.austin.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.austin.models.Ninja;

public interface NinjaRepo extends CrudRepository<Ninja, Long> {

	ArrayList<Ninja> findAll();
}
