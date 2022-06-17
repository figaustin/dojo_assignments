package com.austin.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.austin.models.Ninja;
import com.austin.services.DojoService;
import com.austin.services.NinjaService;

@Controller
@RequestMapping("/ninja")
public class NinjaController {

	
	@Autowired
	private NinjaService ninjaService;
	
	@Autowired
	private DojoService dojoService;
	
	@GetMapping("/new")
	public String createNinja(Model model) {
		model.addAttribute("ninja", new Ninja());
		model.addAttribute("dojos", dojoService.findAll());
		
		return "ninja";
	}
	
	@PostMapping("/new")
	public String insertNinja( @Valid @ModelAttribute("ninja") Ninja ninja, BindingResult res) {
		
		if(res.hasErrors()) {
			return "ninja";
		}
		
		ninjaService.create(ninja);
		return "redirect:/ninja/new";
	}
}
