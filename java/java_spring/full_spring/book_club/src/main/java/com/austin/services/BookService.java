package com.austin.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.austin.models.Book;
import com.austin.repositories.BookRepo;

@Service
public class BookService {
	
	@Autowired
	private BookRepo bookRepo;
	
	public ArrayList<Book> findAll() {
		return (ArrayList<Book>) bookRepo.findAll();
	}
	
	public Book findById(Long id) {
		return bookRepo.findById(id).orElse(null);
	}
	
	public void create(Book book) {
		bookRepo.save(book);
	}
	
	public void update(Book book) {
		bookRepo.save(book);
	}
	
	public void deleteOne(Long id) {
		bookRepo.deleteById(id);
	}
}
