package com.austin.controllers;

import java.util.List;

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

import com.austin.models.Dojo;
import com.austin.models.Ninja;
import com.austin.services.DojoService;
import com.austin.services.NinjaService;

@Controller
@RequestMapping("/dojo")
public class DojoController {

	
	@Autowired
	private DojoService dojoService;
	
	@Autowired
	private NinjaService ninjaService;
	
	@GetMapping("/new")
	public String createDojo(Model model) {
		
		model.addAttribute("dojo", new Dojo());
		return "dojo";
	}
	
	@PostMapping("/new")
	public String insertDojo( @Valid @ModelAttribute("dojo") Dojo dojo, BindingResult res) {
		
		if(res.hasErrors()) {
			return "dojo";
		}
		
		dojoService.create(dojo);
		return "redirect:/dojo/new";
	}
	
	@GetMapping("/{id}")
	public String show( @PathVariable("id") Long dojoId, Model model) {
		
		model.addAttribute("dojo", dojoService.findById(dojoId));
		return "show";
	}
}
