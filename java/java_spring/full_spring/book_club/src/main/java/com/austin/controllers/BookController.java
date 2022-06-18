package com.austin.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.austin.models.Book;
import com.austin.services.BookService;

@Controller
@RequestMapping("/books")
public class BookController {
	
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("")
	public String books(Model model, HttpSession session) {
		model.addAttribute("books", bookService.findAll());
		model.addAttribute("user", session.getAttribute("user"));
		return "books";
	}
	
	@PostMapping("/new")
	public String addBook(@Valid @ModelAttribute("book") Book book, BindingResult res) {
		if(res.hasErrors()) {
			return "books";
		}
		
		bookService.create(book);
		return "redirect:/books";
	}
	
	@GetMapping("/new")
	public String createBook(Model model, HttpSession session) {
		model.addAttribute("book", new Book());
		model.addAttribute("user", session.getAttribute("user"));
		return "newbook";
	}
	
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long bookId, Model model) {
		model.addAttribute("book", bookService.findById(bookId));
		return "showbook";
	}
	
}
