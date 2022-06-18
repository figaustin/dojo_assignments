package com.austin.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.austin.models.Book;

@Repository
public interface BookRepo extends CrudRepository<Book, Long>{
	
	public ArrayList<Book> findAll();
	
	public Book findByTitle(String title);
}
