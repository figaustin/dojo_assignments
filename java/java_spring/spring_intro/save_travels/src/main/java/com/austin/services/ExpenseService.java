package com.austin.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.austin.models.Expense;
import com.austin.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	
	@Autowired
	private ExpenseRepository expenseRepository;
	
	public ArrayList<Expense> findAll() {
		return (ArrayList<Expense>) expenseRepository.findAll();
	}
	
	public Expense findOne(Long id) {
		Optional<Expense> optExpense = expenseRepository.findById(id);
		
		return optExpense.isPresent() ? optExpense.get() : null;
	}
	
	public void create(Expense expense) {
		expenseRepository.save(expense);
		
	}
	
	public void update(Expense expense) {
		expenseRepository.save(expense);
	}
	
	public void deleteOne(Long id) {
		expenseRepository.deleteById(id);
	}
}
