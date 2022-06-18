package com.austin.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.austin.models.User;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {

	
	public ArrayList<User> findAll();
	
	public User findByName(String username);
	
	public User findByEmail(String email);
}
